import React, { Component } from "react";
import "../App.css";

class Navbar extends Component {
  renderUser = () => {
    // console.log(this.props.searchChannel);
    let currentUser = this.props.users.filter(
      (item) => item.id === this.props.user.id
    );
    // console.log(currentUser.length > 0 && currentUser[0].id);
    return (
      <div>
        <nav class="navbar">
          <a class="navbar-brand" href="#">
            <img
              // src={this.url()[0]}
              src={currentUser.length > 0 && currentUser[0].img_url}
              width="39"
              height="39"
              class="d-inline-block align-top"
              alt=""
              loading="lazy"
            />
            {/* {this.currentUser.length > 0 && this.currentUser()[0].username} */}
            {/* {this.username()[0]} */}
            {currentUser.length > 0 && currentUser[0].username}
          </a>
          <form
            class="form-inline"
            onSubmit={(e) => this.props.searchChannel(e)}
          >
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Find a channel..."
              aria-label="Search"
            />
            <button type="submit">
              <a class="nav-link" href="#search">
                Search
              </a>
            </button>
          </form>
          <div onClick={() => this.props.handleLogout()}>
            <a class="nav-link" href="#" type="click">
              Logout
            </a>
          </div>
        </nav>
      </div>
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
        {this.renderUser()}
      </div>
    );
  }
}
export default Navbar;
