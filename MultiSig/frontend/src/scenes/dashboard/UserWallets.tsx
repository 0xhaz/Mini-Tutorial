import { useState, useEffect } from "react";
import { Box, Button, Typography, Dialog } from "@mui/material";
import DashboardBox from "../../components/DashboardBox";
import BoxHeader from "../../components/BoxHeader";
import DashboardContent from "../../components/DashboardContent";
import { useAccount } from "wagmi";
import { getWallets } from "../../hooks/FactoryHooks";
import { getOwners } from "../../hooks/MultiSigHooks";
import WalletModal from "../../modals/WalletModal";

type Props = {
  setActiveAddress: (address: string) => void;
};

const UserWallets = ({ setActiveAddress }: Props) => {
  const { address } = useAccount();

  const [account, setAccount] = useState<string[]>([]);
  const [owners, setOwners] = useState<string[]>([]);
  const [activeAddress, _] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    setActiveAddress(address as string);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!address) return;

    try {
      const fetchAccounts = async () => {
        const wallets = await getWallets(address);
        setAccount(wallets as string[]);
      };
      fetchAccounts();
    } catch (error) {
      console.log(error);
    }
  }, [address]);

  const handleCreate = (newWalletAddress: string, owners: string[]) => {
    setAccount(prevAccounts => [...prevAccounts, newWalletAddress]);
    setActiveAddress(newWalletAddress);
    setOwners(owners);
    handleClose();
  };

  return (
    <DashboardBox gridArea="a" position="relative">
      <BoxHeader title="Your MultiSig Wallets" />
      {account.map((address, index) => (
        <DashboardContent
          key={index}
          isActive={address === activeAddress}
          onClick={() => {
            setActiveAddress(address);
          }}
        >
          <Typography>{address}</Typography>
        </DashboardContent>
      ))}
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
        <WalletModal close={handleClose} onCreate={handleCreate} />
      </Dialog>
    </DashboardBox>
  );
};

export default UserWallets;
