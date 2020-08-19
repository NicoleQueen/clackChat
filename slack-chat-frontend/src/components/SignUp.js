import React from "react";
import "../login.scss";

class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    img_url: "",
  };

  handleChange = (e) => {
    let { name, value } = e.target;
    console.log(e.target);
    console.log(e.target.value);
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="form ">
        <form onSubmit={(e) => this.props.handleLoginOrSignup(e, this.state)}>
          <h2>Time to feel like home,</h2>
          <label>
            <span>User Name</span>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={this.state.email}
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
          <label>
            <span>Profile Image</span>
            <input
              type="text"
              name="img_url"
              value={this.state.img_url}
              onChange={this.handleChange}
            />
          </label>
          <button type="button" class="submit">
            Sign Up
          </button>
        </form>
        <a href="http://localhost:3002/login">
          <button type="button" class="fb-btn">
            Join with <span>Slack Chat</span>
          </button>
        </a>
      </div>
    );
  }
}

export default SignUp;
