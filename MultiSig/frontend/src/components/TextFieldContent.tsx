import { TextField } from "@mui/material";
import { styled } from "@mui/system";

const TextFieldContent = styled(TextField)(({ theme }) => ({
  margin: "0 auto",
  width: "100%",
  backgroundColor: theme.palette.grey[800],
  borderColor: theme.palette.primary[400],
  color: theme.palette.primary[400],
  "& .MuiOutlinedInput-input": {
    color: theme.palette.grey[400],
  },
  "& .MuiInputLabel-root": {
    color: theme.palette.grey[400],
  },
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.grey[400],
  },
}));

export default TextFieldContent;
