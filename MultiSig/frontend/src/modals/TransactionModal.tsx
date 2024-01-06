import { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { useTheme } from "@mui/material";
import DashboardBox from "../components/DashboardBox";
import BoxHeader from "../components/BoxHeader";
import TextFieldContent from "../components/TextFieldContent";

type Props = {};

const TransactionModal = (props: Props) => {
  const { palette } = useTheme();
  return (
    <DashboardBox
      sx={{
        width: "600px",
        height: "400px",
        backgroundColor: palette.grey[800],
        borderRadius: "1px",
        overflow: "hidden",
      }}
    >
      <BoxHeader title="Set a Transaction" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "1.5rem",
          padding: "0 1rem",
          height: "100%",
        }}
      >
        <TextFieldContent
          id="outlined"
          label="Receiver Address"
          variant="outlined"
          onChange={() => {}}
        />
        <TextFieldContent
          id="outlined-multiline-flexible"
          label="Ether Value"
          type="number"
          variant="outlined"
          sx={{
            marginTop: "1rem",
          }}
          inputProps={{
            min: 0,
          }}
          onChange={() => {}}
        />

        <TextFieldContent
          id="outlined"
          label="Data (Optional)"
          variant="outlined"
          sx={{
            marginTop: "1rem",
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
            width: "40%",
          }}
        >
          Create New Transaction
        </Button>
      </Box>
    </DashboardBox>
  );
};

export default TransactionModal;
