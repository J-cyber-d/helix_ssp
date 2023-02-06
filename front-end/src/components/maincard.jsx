import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CheckboxCard from "./checkboxCard";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, CardHeader, Grid } from "@mui/material";
import Item from "@mui/material/Grid";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function maincard() {
  return (
    <Box
      sx={{
        marginTop: "20px",
      }}
    >
      <Card>
        <CardHeader
          title={
            <Button variant="contained" color="success">
              <label className="font-3">Add New</label>
            </Button>
          }
          style={{ marginTop: "7px", marginLeft: "25cm" }}
        />
        <CardContent style={{ marginTop: "-35px" }}>
          <Grid container spacing={2}>
            <Grid item xs={5} style={{ marginTop: "20px" }}>
              <Item>
                <Row className="p-2 m-3">
                  <Col md={12} sm={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Name of the Title</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col md={12} sm={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Tile Type</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col md={12} sm={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Default URL</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col md={12} sm={12}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Titl Icon</Form.Label>
                      <div class="input-group mb-3">
                        <input
                          type="file"
                          class="form-control"
                          id="inputGroupFile02"
                        />
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
              </Item>
            </Grid>
            <Grid item xs={7}>
              <Item>
                <CheckboxCard />
              </Item>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
