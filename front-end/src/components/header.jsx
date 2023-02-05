import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/header.css";
import ReplayCircleFilledOutlinedIcon from "@mui/icons-material/ReplayCircleFilledOutlined";
import HelpIcon from "@mui/icons-material/Help";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import { color } from "@mui/system";
import Vector2 from "../assets/img/Vector2.png";

export default function () {
  return (
    <react-fragment>
      <div>
        <header style={{ width: "100%" }}>
          <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom border-primary border-4">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <div className="title">
                  BON SECOURS MERCY <span className="title-2">HEALTH</span>
                </div>
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="collapse navbar-collapse justify-content-end"
                id="navbarSupportedContent"
              >
                <form class="d-flex" role="search">
                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                          <ReplayCircleFilledOutlinedIcon
                            color="grey"
                            fontSize="large"
                          />
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          <HelpIcon color="primary" fontSize="large" />
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          <Avatar alt="Remy Sharp" src={Vector2} />
                        </a>
                      </li>
                      <li class="nav-item dropdown mt-1">
                        <a
                          class="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <label className="fw-bolder">Pankit Patel</label>
                          <br></br>
                          <label style={{ fontSize: "15px" }}>Admin</label>
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </react-fragment>
  );
}
