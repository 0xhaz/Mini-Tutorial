import { Box, useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
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
    "a"
    "a"
    "a"
    "a"
    "a"
    "b"
    "b"
    "b"
    "b"
    "c"
    "c"
    "c"
    "c"
   
   
   
`;

const Dashboard = () => {
  const [activeAddress, setActiveAddress] = useState<string[] | string | null>(
    null
  );
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
      <UserWallets setActiveAddress={setActiveAddress} />
      <Transactions />
      <Owners activeAddress={activeAddress} />
      <Balance />
    </Box>
  );
};

export default Dashboard;
