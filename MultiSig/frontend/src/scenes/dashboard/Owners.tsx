import DashboardBox from "../../components/DashboardBox";
import BoxHeader from "../../components/BoxHeader";
import OwnersContent from "../../components/OwnersContent";
import { getWallets } from "../../hooks/FactoryHooks";
import { themeSettings } from "../../theme";
import FlexBetween from "../../components/FlexBetween";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { getOwners } from "../../hooks/MultiSigHooks";
import { Typography } from "@mui/material";

type Props = {
  activeAddress: string[] | string | null;
};

const Owners = ({ activeAddress }: Props) => {
  const { address } = useAccount();
  const [owners, setOwners] = useState<string[]>([]);
  const [_, setActiveAddress] = useState<string[] | null>(null);

  const fetchAddresses = async () => {
    const wallets = await getWallets(address);
    setActiveAddress(wallets as string[]);
  };

  useEffect(() => {
    if (!address) return;

    try {
      fetchAddresses();
    } catch (error) {
      console.log(error);
    }
  }, [address]);

  useEffect(() => {
    if (!activeAddress) return;

    try {
      const fetchOwners = async () => {
        const owners = await getOwners(activeAddress as `0x${string}`[]);
        setOwners(owners as string[]);
      };
      fetchOwners();
    } catch (error) {
      console.log(error);
    }
  }, [activeAddress]);

  return (
    <DashboardBox gridArea="c">
      <BoxHeader title="Owners" />
      {owners.map((owner, index) => (
        <OwnersContent>
          <FlexBetween
            sx={{
              color: themeSettings.palette.secondary[500],
              padding: "0 50%",
            }}
          >
            <Typography>{owner[index]}</Typography>
          </FlexBetween>
        </OwnersContent>
      ))}
    </DashboardBox>
  );
};

export default Owners;
