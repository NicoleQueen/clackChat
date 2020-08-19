import React from "react";

class PostForm extends React.Component {
  
  state = {
    content:'',
    timestamp:'',
    user_id: '',
    channel_id: ''
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    fetch('http://localhost:4000/posts',{
        method:"POST",
        headers:{
          'Content-Type':'application/json',
          'Authorization': `Bearer ${this.props.token}`
        },
        body:JSON.stringify(this.state)
      })
      .then(res => res.json())
      .then(json => this.props.addPostToState(json))
  }

  // let currentChannel = props.channels.filter((channel) => {
  //   return channel.id === parseInt(props.match.params.channelId);
  // });

  // let currentChannelName = currentChannel.length > 0 && currentChannel[0].name;
  // console.log(currentChannelName);

  render() {
    console.log(this.props)
    return (
      <div className="AddPost">
          <form onSubmit={(e) => this.props.handleSubmit(e)}>

          <input type="text" name="content" value={this.state.content} onChange={this.handleChange}/>
          <input type="submit" />

        </form>
  
      </div>
    );
  }  
}

export default PostForm;
