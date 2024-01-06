import { useState, useEffect } from "react";
import { Box, Button, Typography, Dialog } from "@mui/material";
import DashboardBox from "../../components/DashboardBox";
import BoxHeader from "../../components/BoxHeader";
import DashboardContent from "../../components/DashboardContent";
import { useAccount } from "wagmi";
import { getWallets } from "../../hooks/FactoryHooks";
import WalletModal from "../../modals/WalletModal";

type Props = {};

const UserWallets = (props: Props) => {
  const { address } = useAccount();

  const [account, setAccount] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!address) return;

    try {
      const getAccount = async () => {
        await getWallets(address).then(res => {
          setAccount(res[0] as string | null);
        });
      };
      getAccount();
    } catch (error) {
      console.log(error);
    }
  }, [address]);

  return (
    <DashboardBox gridArea="a" position="relative">
      <BoxHeader title="Your MultiSig Wallets" />
      <DashboardContent>
        <Typography>{account}</Typography>
      </DashboardContent>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          height: "100%",
          position: "absolute",
          bottom: "1rem",
          left: "70%",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          focusRipple
          onClick={handleClick}
        >
          + New Wallet
        </Button>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <WalletModal />
      </Dialog>
    </DashboardBox>
  );
};

export default UserWallets;
