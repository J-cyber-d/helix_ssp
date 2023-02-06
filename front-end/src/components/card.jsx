import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Image1 from "../assets/img/h2o.jpeg";
import "../styles/card.css";
import { margin } from "@mui/system";

export default function CardUi(props) {
  const theme = useTheme();

  return (
    <div>
      <Card
        sx={{ display: "flex" }}
        style={{ width: "374px", height: "83px" }}
        className="border border-2"
      >
        <CardMedia
          style={{
            width: "4rem",
            height: "4rem",
            marginLeft: "8px",
            marginTop: "8px",
          }}
          component="img"
          image={Image1}
          alt="Live from space album cover"
          className="border rounded-1 border-4 border-green"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent
            sx={{ flex: "1 0 auto" }}
            style={{
              marginTop: "-6px",
              marginLeft: "5px",
              backgroundColor: "white",
            }}
          >
            <Typography component="div" variant="h5">
              <label className="card-text-h">H2O.ai - Global</label>
            </Typography>
            <Typography style={{ marginTop: "-4px" }}>
              <label className="card-text-p">AI Cloud Platform</label>
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
}
