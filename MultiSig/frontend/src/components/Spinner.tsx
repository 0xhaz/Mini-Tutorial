import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import React from "react";

type Props = {
  width?: number;
  height?: number;
};

const Spinner = ({ width = 40, height = 40 }: Props) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box
      width={width}
      height={height}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress variant="determinate" value={progress} />
    </Box>
  );
};

export default Spinner;
