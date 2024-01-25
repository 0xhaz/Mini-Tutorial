import React, { useEffect } from "react";
import { Box, Button, useTheme, Input } from "@mui/material";
import FlexBetween from "../components/FlexBetween";
import BoxHeader from "../components/BoxHeader";
import { stakeEther } from "../hooks/StakingHooks";
import { useAccount } from "wagmi";
import { parseEther } from "viem";

type Props = {
  onClose: () => void;
  selectedPeriod: number;
  selectedPeriodName: string;
};

const StakingModal = ({
  onClose,
  selectedPeriod,
  selectedPeriodName,
}: Props) => {
  const { address } = useAccount();
  const { palette } = useTheme();
  const [value, setValue] = React.useState<string>("0");

  if (!open) return null;

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  const onSubmit = () => {
    stakeEther(
      address as `0x${string}`,
      selectedPeriod,
      parseEther(value.toString())
    );
    console.log("Value: ", value);
    console.log("Selected Period: ", selectedPeriod);
  };

  useEffect(() => {
    console.log("Selected Period: ", selectedPeriod);
  }, []);

  return (
    <Box
      sx={{
        width: "600px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: palette.grey[900],
        backgroundImage: "linear-gradient(45deg, #f2b455, #8f929b, #0ebfa0)",
      }}
    >
      <BoxHeader title="Stake Your Eth" subtitle={selectedPeriodName} />
      <Box
        sx={{
          marginTop: "3rem",
          display: "flex",
          flexDirection: "column",
          width: "50%",
        }}
      >
        <Input
          placeholder="Enter Amount"
          sx={{
            marginTop: "0.5rem",
            width: "100%",
            height: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: palette.grey[200],
            color: palette.grey[900],
            padding: "0 1rem",
            borderRadius: "5px",
          }}
          type="number"
          onChange={onChange}
        />

        <FlexBetween sx={{ gap: "20px" }}>
          <Button
            variant="contained"
            sx={{ marginTop: "1rem", width: "100%", height: "40px" }}
            onClick={onSubmit}
          >
            Stake
          </Button>

          <Button
            onClick={onClose}
            variant="contained"
            sx={{
              marginTop: "1rem",
              width: "100%",
              height: "40px",
            }}
          >
            Close
          </Button>
        </FlexBetween>
      </Box>
    </Box>
  );
};

export default StakingModal;
