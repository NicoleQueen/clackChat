import React, { Component } from "react";
import { Link } from "react-router-dom";

class ChannelsList extends Component {
  renderChannels = () => {
    return this.props.channels.map((channel) => (
      <Link key={channel.id} to={`/channels/${channel.id}`}>
        <li id="channel">{channel.name}</li>
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
