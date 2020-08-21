import React from "react";

class PostForm extends React.Component {

    state = {
    content:'',
    timestamp:'',
    user_id: this.props.user.id,
    channel_id: ''
    }

  componentDidMount() {
    this.setState({channel_id:this.props.match.params.channelId})  
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      content: e.target.value,
      timestamp: '2020-8-17 20: 20', 
    })
    console.log(this.state)
  }

  currentChannelInfo = () => {
    let currentChannel = this.props.channels.filter((channel) => 
      channel.id === parseInt(this.props.match.params.channelId)
    )

    return (
      <form id="form" onSubmit={(e) => this.props.addPost(e, this.state)}>
        <input
          name="post"
          type="text"
          placeholder={"message#" + currentChannel.length > 0 && currentChannel[0].name}
          onChange={this.handleChange}
        />
        <input type="submit" />
      </form>
    )
  }

  render() {
    return (
      <div className="Post">{this.currentChannelInfo()}</div>
  )}
}

export default PostForm;
