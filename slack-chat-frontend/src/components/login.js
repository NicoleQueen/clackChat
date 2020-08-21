import React from "react";
import "../login.scss";
import { NavLink } from "react-router-dom";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (e) => {
    let { name, value } = e.target;
    // console.log({ name, value });
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="Login">
        <p class="tip">
          A proprietary communication platform developed by Purple Team:)
        </p>
        <div class="cont">
          <div class="form sign-in">
            <h2>Welcome to Slack Chat!</h2>
            <form
              onSubmit={(e) => this.props.handleLoginOrSignup(e, this.state)}
            >
              <label>
                <span>Username</span>
                <input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <span>Password</span>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </label>
              {/* <p class="forgot-pass">Forgot password?</p> */}
              <button type="submit" class="submit" id="b1">
                Sign In
              </button>
            </form>
            {/* <a href="https://facebook.com/" target="_blank">
              <button type="button" class="fb-btn" id="b2">
                Connect with <span>facebook</span>
              </button>
            </a> */}
          </div>
          <NavLink to="/signup">
            <div class="sub-cont">
              <div class="img">
                <div class="img__text m--up">
                  <h2>New here?</h2>
                  <p>Creat a new account and discover great people!</p>
                </div>

                <div>
                  <div class="img__btn">
                    <span class="m--up">Sign Up</span>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Login;
