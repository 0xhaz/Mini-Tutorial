import React from "react";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import { Box, Typography, useTheme } from "@mui/material";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import FlexBetween from "./FlexBetween";

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();

  return (
    <FlexBetween ml="1.75rem" p="0.5rem 0rem" color={palette.grey[300]}>
      <FlexBetween gap="0.75rem">
        <LocalHotelIcon
          sx={{
            fontSize: "28px",
          }}
        />
        <Typography variant="h3" fontSize="16px">
          Saav3
        </Typography>
      </FlexBetween>

      <FlexBetween mr="1.75rem" p="0.5rem 0rem">
        <Box>
          <ConnectButton accountStatus={"address"} />
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
