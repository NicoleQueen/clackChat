import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar.js";

// import { BrowserRouter as Router, Route } from "react-router-dom";
import SlackPage from "./containers/SlackPage.js";

import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
// import {Redirect} from "react-router-dom";
import {Route, Switch, NavLink, withRouter} from 'react-router-dom'

class App extends Component {
  
  state = {
    user:{
      id:null,
      username:null,
      token:null
    },
    channels: [],
    users: [],
    posts: [],
  };

  componentDidMount() {
    console.log(this.props)
    this.fetchChannels();
    this.fetchUsers();
    this.fetchPosts();

    if(localStorage.token) {
      fetch('http://localhost:4000/persist',{
        headers:{
          "Authorization": `Bearer ${localStorage.token}`
        }
      })
      .then(res => res.json())
      .then(json =>{
        console.log(json)
         this.handleAuthResponse(json)
      })
      // .then(json => window.location.replace('http://localhost:3000/channels'))
    }
  }

  handleAuthResponse = (res) => {
    if(res.user){
      console.log(this.props)
      localStorage.token = res.token
      this.setState({user:{id:res.user.id, username:res.user.username, token:res.token}, }, () => {
      this.props.history.push('/channels')
      // window.location.replace('http://localhost:3000/channels')
      console.log(this.state.user)
    })
  } else {
      alert(res.error)
    }
  }

  fetchChannels = () => {
    fetch(`http://localhost:4000/channels`)
      .then((res) => res.json())
      .then((data) => this.setState({ channels: data }));
  };

  fetchUsers = () => {
    fetch(`http://localhost:4000/users`)
      .then((res) => res.json())
      .then((data) => this.setState({ users: data }));
  };

  fetchPosts = () => {
    fetch(`http://localhost:4000/posts`)
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data }));
  };

  handleLogin = (e, userInfo) =>{
    e.preventDefault()
 
    fetch('http://localhost:4000/login',{
     method:"POST",
     headers:{
       'Content-Type':'application/json'
     },
     body:JSON.stringify(userInfo)
   })
   .then(res => res.json())
   .then(json => {
     console.log(json)
     if(!json.error){
       this.handleAuthResponse(json)
     }else {
       alert(json.error)
     }
   })
   .catch(err => console.log(err))
  }
 
  handleSignup = (e,userInfo) => {
   e.preventDefault()
    fetch('http://localhost:4000/users',{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(userInfo)
    })
    .then(res => res.json())
    .then(json => {
     if(!json.error){
       this.handleAuthResponse(json)
     }else {
       alert(json.error)
     }
    })
  }
 

  renderLoginPage = () => <Login handleLoginOrSignup={this.handleLogin}/>
  renderSignUpPage = () =>  <SignUp handleLoginOrSignup={this.handleSignup}/>

  render() {
    return (
        <div className="App">
          {/* <NavBar users={this.state.users} /> */}
          <header>
        <h3>slackChat</h3>
       <ul>
         <li>
           <NavLink to='/' exact>Home</NavLink>
         </li>
         <li>
           <NavLink to='/login'>Login</NavLink>
         </li>
         <li>
           <NavLink to='/signup'>Sign up</NavLink>
         </li>
         {/* <li>
           <NavLink to='/channels'>Channels</NavLink>
         </li> */}
       </ul>
      </header>

          
      <Switch>

        <Route exact path='/' component={Home}/>
        <Route path='/login' render={this.renderLoginPage}/>
        <Route path='/signup' render={this.renderSignUpPage}/>

      </Switch>

    </div>
    
    //       <NavBar users={this.state.users} />
    //       <Route path='/login'> 
    //         {this.renderLoginPage}
            // {/* window.location.replace(localhost:3000/channels) */}
          // </Route> 
          //  <Route path='/signup' render={this.renderSignUpPage}/>
          //  <Route
          //   path="/channels"
          //   render={(routerProps) => (
          //     <SlackPage
          //       {...routerProps}
          //       channels={this.state.channels}
          //       posts={this.state.posts}
          //     />
          //   )}
    //       />
    //     </div>
      // </Router>
    );
  }
}

export default withRouter(App);
