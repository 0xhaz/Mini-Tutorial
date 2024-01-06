import { Box } from "@mui/material";
import { styled } from "@mui/system";

const OwnersContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "1rem auto",
  height: "4rem",
  width: "95%",
  backgroundColor: theme.palette.grey[800],
  borderRadius: "10px",
  borderBottom: "2px solid rgba(0,0,0,0.8)",
}));

export default OwnersContent;
