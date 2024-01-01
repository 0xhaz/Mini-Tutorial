import WalletIcon from "@mui/icons-material/Wallet";
import { Box, Typography, useTheme } from "@mui/material";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import FlexBetween from "./FlexBetween";

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* LEFT SIDE */}
      <FlexBetween gap="0.75rem">
        <WalletIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
          MultiSig Wallet
        </Typography>
      </FlexBetween>

      {/* RIGHT SIDE */}
      <FlexBetween>
        <Box>
          <ConnectButton accountStatus={"address"} />
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
