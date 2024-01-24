import React from "react";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import DashboardBox from "../components/DashboardBox";
import BoxHeader from "../components/BoxHeader";
import StakingCards from "../cards/StakingCards";
import StakingTable from "../components/StakingTable";
import { STAKING_PERIODS, ASSETS_STAKED } from "../constants/config";
import { Box } from "@mui/material";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: "2rem",
        }}
      >
        <BoxHeader
          title="Saav3"
          subtitle="Earn Passive Income While You Sleep"
          icon={
            <LocalHotelIcon sx={{ fontSize: "48px", marginRight: "1rem" }} />
          }
        />
      </Box>
      <DashboardBox>
        {STAKING_PERIODS.map(stakingPeriod => (
          <StakingCards
            id={stakingPeriod.id}
            name={stakingPeriod.name}
            apy={stakingPeriod.apy}
          />
        ))}
      </DashboardBox>
      <DashboardBox>
        <StakingTable />
      </DashboardBox>
    </>
  );
};

export default Dashboard;
