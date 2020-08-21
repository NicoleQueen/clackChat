import React from "react";

class PostForm extends React.Component {
  state = {
    content: "",
    timestamp: "",
    user_id: this.props.user.id,
    channel_id: "",
  };

  componentDidMount() {
    this.setState({ channel_id: this.props.match.params.channelId });
  }

  handleChange = (e) => {
    // console.log(e.target.value)
    // let {name, value} = e.target.value
    // debugger
    this.setState({
      content: e.target.value,
      timestamp: "2020-8-17 20: 20",
    });
    console.log(this.state);
  };

  currentChannelInfo = () => {
    let currentChannel = this.props.channels.filter(
      (channel) => channel.id === parseInt(this.props.match.params.channelId)
    );

    return (
      <form id="form" onSubmit={(e) => this.props.addPost(e, this.state)}>
        <input
          name="post"
          type="text"
          placeholder={
            "message#" + currentChannel.length > 0 && currentChannel[0].name
          }
          onChange={this.handleChange}
        />
        <input type="submit" />
      </form>
    );
  };

  // currentChannel = this.props.channels.filter(
  //   (item) => item.id === this.props.channel.id
  // );

  // currentChannelName = (currentChannel) => {
  //   currentChannel.length > 0 && currentChannel[0].name;
  //   // console.log(currentChannelName);
  // }

  render() {
    return <div className="Post">{this.currentChannelInfo()}</div>;
  }
}

// class PostForm extends React.Component {

//   state = {
//     content:'',
//     timestamp:'',
//     user_id: '',
//     channel_id: ''
//   }

//     // let currentChannel = props.channels.filter((channel) => {
//     // return channel.id === parseInt(props.match.params.channelId);
//     // });

//   handleChange = (e) => {
//     let {name, value} = e.target
//     this.setState({
//       [name]: value
//     })
//     console.log(this.state)
//   }

//   handleSubmit = (e) => {
//     console.log(e.target)
//     console.log(this.props)
//       e.preventDefault()
//       console.log(e)
//       fetch('http://localhost:4000/posts',{
//           method:"POST",
//           headers:{
//             'Content-Type':'application/json',
//             // 'Authorization': `Bearer ${this.props.token}`
//           },
//           body:JSON.stringify(this.state)
//         })
//         .then(res => res.json())
//   }

//   render(){
//       console.log(this.props)
//     return (
//       <div className="AddPost">
//        <form onSubmit={(e) => this.handleSubmit(e)}>
//            <label>Insert Post Here!</label>
//            <input type="text" name="content" value={this.state.content} onChange={this.handleChange}/>
//            <input type="submit" value="Submit" />
//         </form>
//       </div>
//     );
//   }
// }

export default PostForm;
