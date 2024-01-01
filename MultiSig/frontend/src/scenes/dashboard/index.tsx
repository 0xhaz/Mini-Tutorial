import { Box, useMediaQuery } from "@mui/material";
import UserWallets from "./UserWallets";
import Transactions from "./Transactions";
import Owners from "./Owners";
import Balance from "./Balance";

const gridTemplateLargeScreens = ` 
    
    "a d d"
    "a b c"
    "a b c"   
    "a b c"
    "a b c"
    "a b c"
    "a b c"
    "a b c"
    "a b c"
    "a b c"
    
   
`;

const gridTemplateSmallScreens = `
    "d"
    "b"
    "b"
    "b"
    "b"
    "c"
    "c"
    "c"
    "c"
    "a"
    "a"
    "a"
    "a"
    "a"
   
   
`;

const Dashboard = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");

  return (
    <Box
      marginTop="1rem"
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
              gridTemplateAreas: gridTemplateLargeScreens,
            }
          : {
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
              gridTemplateAreas: gridTemplateSmallScreens,
            }
      }
    >
      <UserWallets />
      <Transactions />
      <Owners />
      <Balance />
    </Box>
  );
};

export default Dashboard;
