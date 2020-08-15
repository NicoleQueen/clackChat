import React, { Component } from "react";
import "../App.css";

class Navbar extends Component {
  username = () => {
    // console.log(this.props.users[0]);
    return this.props.users.map(
      (item) =>
        // console.log(item.name);
        item.username
    );
  };

  url = () => {
    // console.log(this.props.users[0]);
    return this.props.users.map(
      (item) =>
        // console.log(item.name);
        item.img_url
    );
  };
  render() {
    return (
      <div
        className={"NavBar"}
        style={{
          borderBottom: "2px solid black",
          paddingBottom: 8,
          marginBottom: 10,
        }}
      >
        <nav class="navbar">
          <a class="navbar-brand" href="#">
            <img
              src={this.url()[0]}
              width="39"
              height="39"
              class="d-inline-block align-top"
              alt=""
              loading="lazy"
            />
            {this.username()[0]}
          </a>
          <form class="form-inline">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search in Slack Chat"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
          <button class="btn btn-outline-success my-2 my-sm-0" type="click">
            Logout
          </button>
        </nav>
        {/* <a className="item">
          <h2 className="ui header">
            <i className="paint brush icon" />
            <div className="content">{`${this.props.message}`}</div>
          </h2>
        </a> */}
      </div>
    );
  }
}
export default Navbar;
