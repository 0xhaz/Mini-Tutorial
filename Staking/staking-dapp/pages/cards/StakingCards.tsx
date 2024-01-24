import React from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  Box,
  Button,
  Typography,
  useTheme,
  CardMedia,
} from "@mui/material";

type Props = {
  id: number;
  name: string;
  apy: number;
};

const StakingCards = ({ id, name, apy }: Props) => {
  const { palette } = useTheme();
  return (
    <Card
      sx={{
        width: 270,
        margin: "2rem auto",
        height: 400,
        borderRadius: "25px",
        boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, 0.8)",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image="/images/weth.svg"
        alt="logo"
        sx={{
          objectFit: "contain",
          padding: "0.4rem",
          backgroundImage: "linear-gradient(45deg, #f2b455, #8f929b, #0ebfa0)",
        }}
      />
      <CardContent
        sx={{
          backgroundColor: palette.grey[900],
          color: palette.primary.contrastText,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography gutterBottom variant="h3" component="div">
          {name}
        </Typography>
        <Typography
          variant="h4"
          color={palette.secondary.main}
          sx={{ marginTop: "0.5rem" }}
        >
          {apy}% APY
        </Typography>
        <CardActions>
          <Button
            size="large"
            variant="contained"
            sx={{
              padding: "0.5rem 4rem 0.5em 4rem",
              marginTop: "2.5rem",
              fontSize: "1rem",
              fontWeight: "500",
            }}
          >
            Stake
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
export default StakingCards;
