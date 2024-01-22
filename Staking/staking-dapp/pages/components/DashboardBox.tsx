import { Box } from "@mui/material";
import { styled } from "@mui/system";

const DashboardBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.light,
  borderRadius: "1rem",
  boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, 0.8)",
  width: "80%",
  margin: "1rem auto",
  padding: "0.5rem",
  height: "800px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));

export default DashboardBox;
