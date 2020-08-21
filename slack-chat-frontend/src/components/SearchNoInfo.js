import React from "react";
const SearchNoInfo = (props) => {
  return (
    <div className={"NoInfo"}>
      {props.channelName} is not found. Search other channels, please!
    </div>
  );
};
export default SearchNoInfo;
