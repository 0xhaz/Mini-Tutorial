import DashboardBox from "../../components/DashboardBox";
import BoxHeader from "../../components/BoxHeader";

type Props = {};

const Owners = (props: Props) => {
  return (
    <DashboardBox gridArea="c">
      <BoxHeader title="Owners" />
    </DashboardBox>
  );
};

export default Owners;
