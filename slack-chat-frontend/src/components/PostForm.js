import React from "react";

function PostForm(props) {
  let currentChannel = props.channels.filter((channel) => {
    return channel.id === parseInt(props.match.params.channelId);
  });

  let currentChannelName = currentChannel.length > 0 && currentChannel[0].name;
  // console.log(currentChannelName);

  return (
    <form id="form" onSubmit={(e) => props.addPost(e)}>
      <input
        name="post"
        type="text"
        placeholder={"message#" + currentChannelName}
      />
      <input type="submit" />
    </form>
  );
}

export default PostForm;
