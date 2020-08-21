import React, { Component } from "react";
import { Link } from "react-router-dom";

class ChannelsList extends Component {
  renderChannels = () => {
    let currentUser = this.props.users.filter(
      (item) => item.id === this.props.user.id
    );

    // console.log(currentUser.length > 0 && currentUser[0].channels);
    return (
      currentUser.length > 0 &&
      currentUser[0].channels.map((channel) => (
        <Link key={channel.id} to={`/channels/${channel.id}`}>
          <li id="channel">{channel.name}</li>
        </Link>
      ))
    );
    // return this.props.channels.map((channel) => (
    //   <Link key={channel.id} to={`/channels/${channel.id}`}>
    //     <li id="channel">{channel.name}</li>
    //   </Link>
    // ));
  };

  render() {
    return (
      <div className="ChannelsList list-group-flush">
        <p>{this.renderChannels()}</p>
      </div>
    );
  }
}

export default ChannelsList;
