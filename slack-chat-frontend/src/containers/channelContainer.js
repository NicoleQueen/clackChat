import React, { Component } from "react";

class ChannelContainer extends Component {
  allChannels = () => {
    // console.log(this.props.channels);
    return this.props.channels.map((item) => (
      // console.log(item.name);
      <li>{item.name}</li>
    ));
  };

  render() {
    return (
      <div className="ChannelContainer">
        <p>{this.allChannels()}</p>
      </div>
    );
  }
}

export default ChannelContainer;
