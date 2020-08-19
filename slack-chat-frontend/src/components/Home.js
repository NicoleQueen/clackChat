import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavBar from "./NavBar.js";
import SlackPage from "../containers/SlackPage.js";

class Home extends Component {
  render() {
    return (
      <Router>
        <div className="Home">
          {/* <NavBar users={this.props.users} user={this.props.user} /> */}
          <Route
            path="/channels"
            render={(routerProps) => (
              <SlackPage
                {...routerProps}
                channels={this.props.channels}
                posts={this.props.posts}
                user={this.props.user}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default Home;
