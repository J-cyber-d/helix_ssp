import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import MainCard from "../components/maincard";
import Breadcrumb from "../components/breadcrumb";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Box } from "@mui/system";

export default function add() {
  return (
    <div>
      <Header />
      <Container>
        <Box style={{ marginTop: "30px", marginBottom: "20px" }}>
          <Breadcrumb />
          <MainCard label="Save Changes" />
        </Box>
      </Container>
      <Footer />
    </div>
  );
}
