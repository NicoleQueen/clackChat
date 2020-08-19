import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar.js";
import NavBarLogin from "./components/NavBarLogin.js";

// import SlackPage from "./containers/SlackPage.js";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import { Redirect } from "react-router-dom";
import { Route, Switch, NavLink, withRouter } from "react-router-dom";

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
  };

  componentDidMount() {
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
          console.log(json);
          this.handleAuthResponse(json);
        });
      // .then(json => window.location.replace('http://localhost:3000/channels'))
    }
  }

  handleAuthResponse = (res) => {
    if (res.user) {
      console.log(this.props);
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
          console.log(this.state.user);
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
      .then((data) => this.setState({ posts: data }));
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
        console.log(json);
        if (!json.error) {
          this.handleAuthResponse(json);
        } else {
          alert(json.error);
        }
      })
      .catch((err) => console.log(err));
  };

  handleSignup = (e, userInfo) => {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((json) => {
        if (!json.error) {
          this.handleAuthResponse(json);
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

  renderLoginPage = () => <Login handleLoginOrSignup={this.handleLogin} />;
  renderSignUpPage = () => <SignUp handleLoginOrSignup={this.handleSignup} />;
  renderHomePage = () => (
    <Home
      user={this.state.user}
      users={this.state.users}
      channels={this.state.channels}
      posts={this.state.posts}
    />
  );

  render() {
    console.log(this.state.user.id);
    return (
      <div className="App">
        {this.state.user.id ? (
          <div>
            <NavBar
              users={this.state.users}
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          </div>
        ) : (
          <div>
            <NavBarLogin />
            <Redirect to={"/login"} />
          </div>
        )}

        {/* <header>
          <h3>slackChat</h3>
          <ul>
            <li>
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Sign up</NavLink>
            </li> */}
        {/* <li>
           <NavLink to='/channels'>Channels</NavLink>
        //  </li> */}
        {/* //   </ul> */}
        {/* // </header> */}

        <Switch>
          <Route exact path="/login" render={this.renderLoginPage} />
          <Route path="/channels" render={this.renderHomePage} />
          <Route path="/signup" render={this.renderSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
