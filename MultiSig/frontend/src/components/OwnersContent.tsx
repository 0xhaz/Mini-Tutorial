import { Box } from "@mui/material";
import { styled } from "@mui/system";

const OwnersContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "1.5rem auto",
  height: "5rem",
  width: "100%",
  backgroundColor: theme.palette.grey[800],
  borderRadius: "10px",
  borderBottom: "2px solid rgba(0,0,0,0.8)",
}));

export default OwnersContent;
