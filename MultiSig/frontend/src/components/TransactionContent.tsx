import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

export type TransactionProps = {
  executed: boolean;
  approvals: number;
  total: number;
  to: string;
  value: string;
  data: string;
};

const TransactionContent = ({
  executed,
  approvals,
  total,
  to,
  value,
  data,
}: TransactionProps) => {
  const { palette } = useTheme();

  return (
    <Box
      width="100%"
      padding="1rem"
      sx={{
        margin: "1.5rem auto",
        backgroundColor: palette.grey[800],
        borderRadius: "10px",
        height: "150px",
      }}
    >
      <Box
        width="100%"
        display="grid"
        alignItems="center"
        padding="0 2rem"
        gap="0.3rem"
        color={palette.primary[400]}
      >
        <Typography>Executed: {executed}</Typography>
        <Typography>
          Approvals: {approvals} / {total}
        </Typography>
        <Typography>To: {to}</Typography>
        <Typography>Value: {value}</Typography>
        <Typography>Data: {data}</Typography>
      </Box>
    </Box>
  );
};

export default TransactionContent;
