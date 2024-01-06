import { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { useTheme } from "@mui/material";
import DashboardBox from "../components/DashboardBox";
import BoxHeader from "../components/BoxHeader";
import TextFieldContent from "../components/TextFieldContent";

type Props = {};

const WalletModal = (props: Props) => {
  const { palette } = useTheme();
  const [addressess, setAddressess] = useState<string[]>([""]);
  const [signatures, setSignatures] = useState<number>(1);

  const addAddress = () => {
    setAddressess([...addressess, ""]);
  };

  const removeAddress = (index: number) => {
    const newAddresses = [...addressess];
    newAddresses.splice(index, 1);
    setAddressess(newAddresses);
  };

  const handleAddressChange = (index: number, value: string) => {
    const newAddresses = [...addressess];
    newAddresses[index] = value;
    setAddressess(newAddresses);
  };

  const renderAddressFields = () => {
    return addressess.map((address, index) => (
      <TextFieldContent
        key={index}
        label={`Address ${index + 1}`}
        variant="outlined"
        value={address}
        sx={{
          marginTop: "1rem",
        }}
        onChange={e => handleAddressChange(index, e.target.value)}
      />
    ));
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

        {addressess.length > 1 && (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => removeAddress(addressess.length - 1)}
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
          onChange={() => {}}
        />

        <Button
          variant="contained"
          color="primary"
          focusRipple
          onClick={() => {}}
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
