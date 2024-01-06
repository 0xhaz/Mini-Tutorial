import { useState, useEffect } from "react";
import { Box, Button, Typography, Dialog } from "@mui/material";
import DashboardBox from "../../components/DashboardBox";
import BoxHeader from "../../components/BoxHeader";
import TransactionModal from "../../modals/TransactionModal";
import TransactionContent from "../../components/TransactionContent";

type Props = {};

const Transactions = (props: Props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <DashboardBox gridArea="b" position="relative">
        <BoxHeader title="Transactions" />
        <TransactionContent
          executed={true}
          approvals={1}
          total={2}
          to="0x6FC5113b55771b884880785042e78521B8b719fa"
          value="0.0001"
          data="0x"
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            height: "100%",
            position: "absolute",
            bottom: "1rem",
            left: "62%",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            focusRipple
            onClick={handleClick}
          >
            + New Transaction
          </Button>
        </Box>

        <Dialog open={open} onClose={handleClose}>
          <TransactionModal />
        </Dialog>
      </DashboardBox>
    </>
  );
};

export default Transactions;
