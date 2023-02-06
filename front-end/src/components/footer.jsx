import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import "../styles/footer.css";
import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <react-fragment>
      <footer className="footer">
        <div>
          <label className="label-1">
            <span>&#169;</span>2021 Bon Secours Mercy Health
          </label>
          <label className="label-2">Powered by Helix</label>
        </div>
      </footer>
    </react-fragment>
  );
}
