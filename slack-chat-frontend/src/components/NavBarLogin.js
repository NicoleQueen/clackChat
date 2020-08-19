import React, { Component } from "react";
import "../App.css";
import { Link, NavLink } from "react-router-dom";

class NavbarLogin extends Component {
  render() {
    return (
      <div
        className={"NavBarLogin"}
        style={{
          borderBottom: "2px solid black",
          paddingBottom: 8,
          marginBottom: 10,
        }}
      >
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img
              src="https://miro.medium.com/max/1838/1*vI3m_C14fVwUcHDHC6wY6g.png"
              width="40"
              height="40"
              class="d-inline-block align-top"
              alt=""
              loading="lazy"
            />
            Slack Chat
          </a>
          <a class="nav-link" href="#">
            Sign up
          </a>
        </nav>
      </div>
    );
  }
}

export default NavbarLogin;
