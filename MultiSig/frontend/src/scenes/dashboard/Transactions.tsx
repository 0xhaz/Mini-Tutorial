import DashboardBox from "../../components/DashboardBox";
import BoxHeader from "../../components/BoxHeader";
import Spinner from "../../components/Spinner";
import TransactionContent from "../../components/TransactionContent";

type Props = {};

const Transactions = (props: Props) => {
  return (
    <>
      <DashboardBox gridArea="b">
        <BoxHeader title="Transactions" />
        <TransactionContent
          executed={true}
          approvals={1}
          total={2}
          to="0x6FC5113b55771b884880785042e78521B8b719fa"
          value="0.0001"
          data="0x"
        />
      </DashboardBox>
    </>
  );
};

export default Transactions;
