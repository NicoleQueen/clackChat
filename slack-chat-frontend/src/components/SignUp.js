import React from "react";

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
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="Sign Up">
        <form onSubmit={(e) => this.props.handleLoginOrSignup(e, this.state)}>
          <label>UserName</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <br />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <label>Profile Image</label>
          <input
            type="text"
            name="img_url"
            value={this.state.img_url}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignUp;
