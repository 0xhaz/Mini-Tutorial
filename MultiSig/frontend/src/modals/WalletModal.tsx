import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { useTheme } from "@mui/material";
import { getAccount, writeContract, waitForTransaction } from "@wagmi/core";
import { isAddress, trim } from "viem";
import toast from "solid-toast";
import DashboardBox from "../components/DashboardBox";
import BoxHeader from "../components/BoxHeader";
import TextFieldContent from "../components/TextFieldContent";
import { FACTORY_ABI, FACTORY_ADDRESS } from "../hooks/config";

type Props = {
  close: () => void;
  onCreate: (newWalletAddress: string, owners: string[]) => void;
};

const WalletModal = (props: Props) => {
  const { palette } = useTheme();
  const [addresses, setAddresses] = useState<string[]>([""]);
  const [signatures, setSignatures] = useState<number>(1);
  const [isDuplicate, setIsDuplicate] = useState<boolean>(false);
  const [invalidAddress, setInvalidAddress] = useState<boolean>(false);

  const addAddress = () => {
    if (addresses.length === 0) {
      const accountAddress = getAccount().address;
      console.log(accountAddress);
      setAddresses([accountAddress as string]);
    } else {
      setAddresses([...addresses, ""]);
    }
  };

  const removeAddress = (index: number) => {
    setAddresses(addresses.filter((_, i) => i !== index));
  };

  const handleAddressChange = (index: number, value: string) => {
    const newAddresses = [...addresses];
    newAddresses[index] = value as `0x${string}`;
    setAddresses(newAddresses);
  };

  const renderAddressFields = () => {
    return addresses.map((address, index) => (
      <TextFieldContent
        key={index}
        id="outlined"
        label={`Address ${index + 1}`}
        variant="outlined"
        sx={{
          marginTop: "1rem",
        }}
        error={isDuplicate || invalidAddress}
        helperText={
          isDuplicate
            ? "Duplicate address"
            : invalidAddress
            ? "Invalid address"
            : ""
        }
        value={address}
        onChange={e => {
          handleAddressChange(index, e.target.value);
        }}
      />
    ));
  };

  const handleCreate: React.MouseEventHandler<HTMLButtonElement> = async () => {
    if (addresses.length === 0) {
      toast.error("Please add at least one address");
      return;
    }

    if (signatures > addresses.length) {
      toast.error(
        "Number of required signatures cannot be greater than the number of addresses"
      );
      return;
    }

    if (addresses.length > 0 && !addresses.every(isAddress)) {
      toast.error("Please enter valid addresses");
      return;
    }

    try {
      const result = await writeContract({
        address: FACTORY_ADDRESS,
        abi: FACTORY_ABI,
        functionName: "create",
        args: [addresses, BigInt(signatures)],
      });

      const data = await waitForTransaction(result);
      const walletAddress = trim(data.logs[0].topics[1]!);

      props.onCreate(walletAddress, addresses);
      props.close();
      toast.success("Wallet created successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardBox
      sx={{
        width: "600px",
        height: "auto",
        backgroundColor: palette.grey[800],
        borderRadius: "1px",
        overflow: "hidden",
      }}
    >
      <BoxHeader title="Create a new wallet" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "1.5rem",
          padding: "0 1rem",
          height: "100%",
        }}
      >
        {renderAddressFields()}
        <Button
          variant="contained"
          color="primary"
          onClick={addAddress}
          sx={{ marginTop: "1rem", width: "30%", alignSelf: "center" }}
        >
          Add Address
        </Button>

        {addresses.length > 1 && (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => removeAddress(addresses.length - 1)}
            sx={{ marginTop: "1rem", width: "30%", alignSelf: "center" }}
          >
            Remove Address
          </Button>
        )}

        <TextFieldContent
          id="outlined-multiline-flexible"
          label="Number of Required Signatures"
          type="number"
          variant="outlined"
          sx={{
            marginTop: "1rem",
          }}
          inputProps={{
            min: 1,
          }}
          onChange={e => setSignatures(parseInt(e.target.value))}
        />

        <Button
          variant="contained"
          color="primary"
          focusRipple
          onClick={handleCreate}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "2rem auto",
            width: "30%",
          }}
        >
          Create New Wallet
        </Button>
      </Box>
    </DashboardBox>
  );
};

export default WalletModal;
