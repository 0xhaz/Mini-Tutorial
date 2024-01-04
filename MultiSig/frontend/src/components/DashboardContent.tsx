import { Box } from "@mui/material";
import { styled } from "@mui/system";

const DashboardContent = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "1.5rem auto",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "3rem",
  width: "95%",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.primary[400],
  cursor: "pointer",
  borderRadius: "0.5rem",
  ":hover": {
    backgroundColor: theme.palette.primary[200],
    boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,0.8)",
    color: theme.palette.grey[900],
  },
  ":active": {
    backgroundColor: theme.palette.primary[300],
    boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,0.8)",
    color: theme.palette.grey[900],
  },
}));

export default DashboardContent;
