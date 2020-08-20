import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavBar from "./NavBar.js";
import SlackPage from "../containers/SlackPage.js";

class Home extends Component {
  render() {
    console.log(this.props)

    return (
      <Router>
        <div className="Home">
          <Route
            path="/channels"
            render={(routerProps) => (
              
              <SlackPage
                {...routerProps}
                channels={this.props.channels}
                posts={this.props.posts}
                user={this.props.user}
                addPost={this.props.addPost}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default Home;
