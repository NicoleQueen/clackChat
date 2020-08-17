import React, { Component } from "react";
import { Link } from "react-router-dom";

class ChannelsList extends Component {
  // allChannels = () => {
  //   // console.log(this.props.channels);
  //   return this.props.channels.map((item) => (
  //     // console.log(item.name);
  //     <li>{item.name}</li>
  //   ));
  // };
  renderChannels = () => {
    return this.props.channels.map((channel) => (
      <Link key={channel.id} to={`/channels/${channel.id}`}>
        <li>{channel.name}</li>
      </Link>
    ));
  };

  render() {
    return (
      <div className="ChannelsList">
        <p>{this.renderChannels()}</p>
      </div>
    );
  }
}

export default ChannelsList;
