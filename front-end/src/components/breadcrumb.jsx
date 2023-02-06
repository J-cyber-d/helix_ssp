import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import "../styles/tile.css";

export default function Breadcrumb() {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    <div>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb" className="font">
          <Link underline="hover" color="inherit" href="/">
            <label className="font">Home</label>
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            <label className="font">Tiles</label>
          </Link>
          <Typography color="text.primary">
            <label className="font">Add</label>
          </Typography>
        </Breadcrumbs>
      </div>
    </div>
  );
}
