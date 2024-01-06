import { Box } from "@mui/material";
import { styled } from "@mui/system";

type DashboardContentProps = {
  isActive?: boolean;
  onClick?: () => void;
};

const DashboardContent = styled(Box, {
  shouldForwardProp: prop => prop !== "isActive",
})<DashboardContentProps>(({ theme, isActive }) => ({
  display: "flex",
  margin: "1.5rem auto",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "3rem",
  width: "95%",
  backgroundColor: isActive
    ? theme.palette.primary[300]
    : theme.palette.grey[800],
  color: isActive ? theme.palette.grey[900] : theme.palette.grey[400],
  boxShadow: isActive ? "0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,0.8)" : "",
  cursor: "pointer",
  borderRadius: "0.5rem",
  ":hover": {
    backgroundColor: theme.palette.primary[200],
    boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,0.8)",
    color: theme.palette.grey[900],
  },
}));

export default DashboardContent;
