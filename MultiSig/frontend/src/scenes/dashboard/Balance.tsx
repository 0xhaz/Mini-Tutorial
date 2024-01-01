import BoxHeader from "../../components/BoxHeader";
import DashboardBox from "../../components/DashboardBox";

const Balance = () => {
  return (
    <DashboardBox gridArea="d">
      <BoxHeader title="Balance" sideText="0.00" />
    </DashboardBox>
  );
};

export default Balance;
