import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar.js";
import Channel from "./components/Channel.js";
import ChannelContainer from "./containers/ChannelContainer.js";

class App extends Component {
  state = {
    channels: [],
    users: [],
  };

  componentDidMount() {
    this.fetchChannels();
    this.fetchUsers();
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

  render() {
    return (
      <div className="App">
        <NavBar message="Welcome to SlackChat!" users={this.state.users} />
        <ChannelContainer channels={this.state.channels} />
        <Channel />
      </div>
    );
  }
}

export default App;
