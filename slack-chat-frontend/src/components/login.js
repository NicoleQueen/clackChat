import React from "react";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    console.log("test");
    return (
      <div className="Login">
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
          <input type="submit" value="Submit" />
        </form>
        {/* <form onSubmit={(e) => this.props.handleLoginOrSignup(e, this.state)}>
         <label>UserName</label>
         <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
        <br/>
         <label>Password</label>
         <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
         <br/>
         <input type="submit" value="Submit" />
      </form> */}
        {/* <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <form onSubmit={(e) => this.props.handleLoginOrSignup(e, this.state)} class="modal-content"> */}
        {/* <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">Sign in</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div> */}
        {/* <div class="modal-body mx-3">
        <div class="md-form mb-5">
          <i class="fas fa-envelope prefix grey-text"></i> */}
        {/* <input type="text" id="defaultForm-username" class="form-control validate"/> */}
        {/* <input type="text" name="username" id="defaultForm-username" class="form-control validate" value={this.state.username} onChange={this.handleChange}/>
          <label data-error="wrong" data-success="right" for="defaultForm-username">Username</label>
        </div> */}
        {/* 
        <div class="md-form mb-4">
          <i class="fas fa-lock prefix grey-text"></i>
          <input type="password" id="defaultForm-pass" class="form-control validate" name="password" value={this.state.password} onChange={this.handleChange}/>
          <label data-error="wrong" data-success="right" for="defaultForm-pass">Password</label>
        </div> */}

        {/* </div>
      <div class="modal-footer d-flex justify-content-center">
        <button type="submit" class="btn btn-default">Login</button>
      </div>
    </form> */}
        {/* </div>
</div> */}

        {/* <div class="text-center">
  <a href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalLoginForm">Login</a>
</div> */}
      </div>
    );
  }
}

export default Login;
