import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar.js";
import NavBarLogin from "./components/NavBarLogin.js";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import { Redirect } from "react-router-dom";
import { Route, Switch, NavLink, withRouter } from "react-router-dom";
import SearchContainer from "./containers/SearchContainer";
import SearchNoInfo from "./components/SearchNoInfo";
import PostForm from "./components/PostForm";

class App extends Component {
  state = {
    user: {
      id: null,
      username: null,
      token: null,
    },
    channels: [],
    users: [],
    posts: [],
    search: false,
    channelIncluded: null,
    searchedChannel: null,
    searchedChannelName: null,
  };

  componentDidMount() {
    // console.log(this.props);
    this.fetchChannels();
    this.fetchUsers();
    this.fetchPosts();

    if (localStorage.token) {
      fetch("http://localhost:3000/persist", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((res) => res.json())
        .then((json) => {
          // console.log(json);
          this.handleAuthResponse(json);
        });
      // .then(json => window.location.replace('http://localhost:3000/channels'))
    }
  }

  handleAuthResponse = (res) => {
    // console.log(res.user);
    if (res.user) {
      // console.log(this.props);
      localStorage.token = res.token;
      this.setState(
        {
          user: {
            id: res.user.id,
            username: res.user.username,
            token: res.token,
          },
        },
        () => {
          this.props.history.push("/channels");
          // window.location.replace('http://localhost:3000/channels')
          // console.log(this.state.user);
        }
      );
    } else {
      alert(res.error);
    }
  };

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
      .then((data) => {
        // console.log(this.state);
        this.setState({ posts: data });
      });
  };

  handleLogin = (e, userInfo) => {
    e.preventDefault();

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        if (!json.error) {
          this.handleAuthResponse(json);
        } else {
          alert(json.error);
        }
      });
    // .catch((err) => console.log(err));
  };

  handleSignup = (e, userInfo) => {
    e.preventDefault();
    // console.log(e, userInfo);
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((json) => {
        // console.log(this.renderLoginPage());
        if (!json.error) {
          // this.renderLoginPage();
          this.props.history.push("/login");
          // this.handleAuthResponse(json);
        } else {
          alert(json.error);
        }
      });
  };

  handleLogout = () => {
    this.setState({
      user: {
        id: null,
        username: null,
        token: null,
      },
    });
  };

  renderLoginPage = () => (
    <Login
      handleLoginOrSignup={this.handleLogin}
      renderSignUpPage={this.renderSignUpPage}
      test={this.test}
    />
  );
  renderSignUpPage = () => <SignUp handleLoginOrSignup={this.handleSignup} />;

  renderHomePage = () => (
    <Home
      user={this.state.user}
      users={this.state.users}
      channels={this.state.channels}
      posts={this.state.posts}
      addPost={this.addPost}
      deletePost={this.deletePost}
      search={this.state.search}
      renderSearchPage={this.renderSearchPage}
    />
  );

  test = () => <SignUp handleLoginOrSignup={this.handleSignup} />;

  searchChannel = (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    let channelsName = this.state.channels.map((channel) => channel.name);
    let searchedChannel = this.state.channels.filter(
      (channel) => channel.name === e.target[0].value
    );
    // console.log(channelsName);
    // console.log(searchedChannel);
    // console.log(channelsName.includes(e.target[0].value));

    // this.setState({
    //   search: true,
    //   searchedChannel: searchedChannel,
    //   searchedChannelName: e.target[0].value,
    // });

    channelsName.includes(e.target[0].value)
      ? this.setState({
          search: true,
          searchedChannel: searchedChannel,
          searchedChannelName: e.target[0].value,
          included: true,
        })
      : this.setState({
          search: true,
          searchedChannel: searchedChannel,
          searchedChannelName: e.target[0].value,
          channelIncluded: false,
        });
    this.renderSearchPage();
    // return <SearchContainer searchedChannel={searchedChannel} />;
  };

  renderSearchPage = () => {
    console.log(this.state);

    return this.state.channelIncluded ? (
      <SearchContainer
        // componentDidMount={console.log("123")}
        searchedChannel={this.state.searchedChannel}
        handleJoinChannel={this.handleJoinChannel}
      />
    ) : (
      <SearchNoInfo channelName={this.state.searchedChanneleName} />
    );
  };

  handleJoinChannel = (channel) => {
    let data = { channels: { id: channel.id, name: channel.name } };
    fetch(`http://localhost:3000/users/${this.state.user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        this.props.history.push(`/channels`);
      })
      .then((json) =>
        this.setState({
          search: false,
          channelIncluded: null,
          searchedChannel: null,
          searchedChannelName: null,
        })
      );
  };

  addPost = (e, post) => {
    e.preventDefault();

    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.props.token}`,
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((json) => {
        // this.fetchPosts()
        // this.setState({
        //   posts: [...this.state.posts, json],
        // });
        window.location.reload(`http://localhost:3001/channels`);
        this.props.history.push(`/channels/${post.channel_id}`);
        // <div>
        //   <Redirect to={`/channels/${post.channel_id}`} />
        // </div>;
      });
  };

  deletePost = (post) => {
    fetch(`http://localhost:3000/posts/${post.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        this.fetchPosts();
        window.location.reload(`http://localhost:3001/channels`);
      });
  };

  render() {
    // console.log(this.state.user.id);
    return (
      <div className="App">
        {this.state.user.id ? (
          <div>
            <NavBar
              users={this.state.users}
              user={this.state.user}
              handleLogout={this.handleLogout}
              searchChannel={this.searchChannel}
            />
          </div>
        ) : (
          <div>
            <NavBarLogin />
            <Redirect to={"/login"} />
          </div>
        )}

        <Switch>
          <Route exact path="/login" render={this.renderLoginPage} />
          <Route path="/channels" render={this.renderHomePage} />
          <Route path="/signup" render={this.renderSignUpPage} />
          <Route path="/channels#search" render={this.SearchPage} />

          {/* <Route path='/post_form' component={this.renderPostForm}/> */}
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
