import DashboardBox from "../../components/DashboardBox";
import BoxHeader from "../../components/BoxHeader";
import Spinner from "../../components/Spinner";

type Props = {};

const Transactions = (props: Props) => {
  return (
    <DashboardBox gridArea="b">
      <BoxHeader title="Transactions" />
    </DashboardBox>
  );
};

export default Transactions;
