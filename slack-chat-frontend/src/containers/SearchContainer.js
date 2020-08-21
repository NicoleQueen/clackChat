import React from "react";
const SearchContainer = (props) => {
  return (
    <div className={"SearchContainer"}>
      Thank you for searching {props.searchedChannel.name}, we connot wait for
      you to join!
      <div onClick={() => props.handleJoinChannel(props.searchedChannel)}>
        <a class="Join" href="#join" type="click">
          Join
        </a>
      </div>
    </div>
  );
};
export default SearchContainer;
