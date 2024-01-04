import DashboardBox from "../../components/DashboardBox";
import BoxHeader from "../../components/BoxHeader";
import DashboardContent from "../../components/DashboardContent";
import { useAccount } from "wagmi";
import { getWallets } from "../../hooks/FactoryHooks";
import { useState } from "react";

type Props = {};

const UserWallets = (props: Props) => {
  const { address } = useAccount();
  const wallets = getWallets(address);
  const [account, setAccount] = useState<string | null>(null);

  return (
    <DashboardBox gridArea="a">
      <BoxHeader title="Your MultiSig Wallets" />
      <DashboardContent>
        0x6FC5113b55771b884880785042e78521B8b719fa
      </DashboardContent>
    </DashboardBox>
  );
};

export default UserWallets;
