import React from "react";
import { Box } from "@mui/system";
import { CardHeader, Grid } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
//import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Item from "@mui/material/Grid";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "../styles/checkbox.css";

const labels = [
  "NE HR Managers",
  "NE users",
  "NE Line Managers",
  "Southwest Line Managers",
  "NW HR Managers",
  "North America HR Managers",
  "NW All Managers",
  "South All Managers",
  "Mid West Users",
  "Mid West Users",
  "Southwest Users",
  "Southwest Users",
];

export default function checkboxCard() {
  return (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      <Card
        style={{ width: "740px", marginLeft: "-80px" }}
        className=" border border-2"
      >
        <CardHeader
          title={<label className="font-2">Groups</label>}
          className="font-2"
        />
        <CardContent>
          <Grid container spacing={2}>
            {labels.map((label) => (
              <Grid item xs={6}>
                <Item>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<label className="font">{label}</label>}
                    />
                  </FormGroup>
                </Item>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
