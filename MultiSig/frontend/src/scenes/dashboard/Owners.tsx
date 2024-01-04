import DashboardBox from "../../components/DashboardBox";
import BoxHeader from "../../components/BoxHeader";
import OwnersContent from "../../components/OwnersContent";
import { themeSettings } from "../../theme";
import FlexBetween from "../../components/FlexBetween";

type Props = {};

const Owners = (props: Props) => {
  return (
    <DashboardBox gridArea="c">
      <BoxHeader title="Owners" />
      <OwnersContent>
        <FlexBetween
          sx={{
            color: themeSettings.palette.secondary[500],
            padding: "0 50%",
          }}
        >
          0x6FC5113b55771b884880785042e78521B8b719fa
          0x6FC5113b55771b884880785042e78521B8b719fa
        </FlexBetween>
      </OwnersContent>
    </DashboardBox>
  );
};

export default Owners;
