import DashboardBox from "../../components/DashboardBox";
import BoxHeader from "../../components/BoxHeader";

type Props = {};

const UserWallets = (props: Props) => {
  return (
    <DashboardBox gridArea="a">
      <BoxHeader title="Your MultiSig Wallets" />
    </DashboardBox>
  );
};

export default UserWallets;
