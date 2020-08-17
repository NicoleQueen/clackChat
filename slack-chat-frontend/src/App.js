import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar.js";

import { BrowserRouter as Router, Route } from "react-router-dom";
import SlackPage from "./containers/SlackPage.js";

class App extends Component {
  state = {
    channels: [],
    users: [],
    posts: [],
  };

  componentDidMount() {
    this.fetchChannels();
    this.fetchUsers();
    this.fetchPosts();
  }

  fetchChannels = () => {
    fetch(`http://localhost:3000/channels`)
      .then((res) => res.json())
      .then((data) => this.setState({ channels: data }));
  };

  fetchUsers = () => {
    fetch(`http://localhost:3000/users`)
      .then((res) => res.json())
      .then((data) => this.setState({ users: data }));
  };

  fetchPosts = () => {
    fetch(`http://localhost:3000/posts`)
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data }));
  };

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar users={this.state.users} />
          <Route
            path="/channels"
            render={(routerProps) => (
              <SlackPage
                {...routerProps}
                channels={this.state.channels}
                posts={this.state.posts}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
