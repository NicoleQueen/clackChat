import React from "react";
const Welcome = (props) => {
  return (
    <div className={"Welcome"}>
      <h3>Welcome to SlackChat!</h3>
      <p id="welcome">
        Slack Chat is a channel-based messaging platform. With Slack Chat,
        people can work together more effectively, connect all their software
        tools and services, and find the information they need to do their best
        work — all within a secure, enterprise-grade environment.
      </p>
      <div id="pp">
        <p>Slack Chat Address: 1101 Dexter Ave N, Seattle, WA 98109</p>
        <p>Slack Chat Phone: (650) 543-4800</p>
      </div>
    </div>
  );
};
export default Welcome;
