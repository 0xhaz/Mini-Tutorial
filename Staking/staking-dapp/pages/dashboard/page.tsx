import React, { useState, useEffect } from "react";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import DashboardBox from "../components/DashboardBox";
import BoxHeader from "../components/BoxHeader";
import StakingCards from "../cards/StakingCards";
import StakingTable from "../components/StakingTable";
import { STAKING_PERIODS, ASSETS_STAKED } from "../constants/config";
import StakingModal from "../modals/StakingModal";
import { Box } from "@mui/material";
import { Dialog } from "@mui/material";
import { getAssets } from "../hooks/StakingHooks";
import { useAccount } from "wagmi";

type Props = {};

const Dashboard = (props: Props) => {
  const { address } = useAccount();
  const [open, setOpen] = useState<boolean>(false);
  const [selectedPeriod, setSelectedPeriod] = useState<number>(0);
  const [selectedPeriodName, setSelectedPeriodName] = useState<string>("");
  const [positionId, setPositionId] = useState<number>(0);

  //   Create handleOpen to open StakingModal page

  const handleOpen = (id: number) => {
    setSelectedPeriod(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const selectedPeriodName = STAKING_PERIODS.find(
      stakingPeriod => stakingPeriod.id === selectedPeriod
    )?.name;

    setSelectedPeriodName(selectedPeriodName || "");
  }, [selectedPeriod]);

  useEffect(() => {
    try {
      const showAssets = async () => {
        const assets = await getAssets(0, address as `0x${string}`);
        console.log("Assets: ", assets);
      };

      showAssets();
    } catch (error) {
      console.log(error);
    }
  }, [address]);

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
            key={stakingPeriod.id}
            id={stakingPeriod.id}
            name={stakingPeriod.name}
            apy={stakingPeriod.apy}
            handleClick={() => handleOpen(stakingPeriod.id)}
          />
        ))}
      </DashboardBox>
      <DashboardBox>
        <StakingTable />
      </DashboardBox>

      {open && (
        <Dialog
          open={open}
          onClose={handleClose}
          sx={{
            "& .MuiDialog-paper": {
              backgroundColor: "transparent",
              boxShadow: "none",
              borderRadius: "15px",
            },
          }}
        >
          <StakingModal
            onClose={handleClose}
            selectedPeriod={selectedPeriod}
            selectedPeriodName={selectedPeriodName}
          />
        </Dialog>
      )}
    </>
  );
};

export default Dashboard;
