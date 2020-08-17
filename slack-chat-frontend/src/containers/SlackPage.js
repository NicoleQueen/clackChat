import React from "react";
import { Route } from "react-router-dom";
import ChannelsList from "./ChannelsList";
import PostsContainer from "./PostsContainer.js";
import PostForm from "../components/PostForm";

const SlackPage = ({ match, channels, posts }) => (
  <div>
    <ChannelsList channels={channels} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Welcome to SlackChat!</h3>}
    />
    <Route
      path={`${match.url}/:channelId`}
      render={(routerProps) => (
        <div>
          <PostsContainer {...routerProps} channels={channels} posts={posts} />
          <PostForm {...routerProps} channels={channels} />
        </div>
      )}
    />
  </div>
);

export default SlackPage;
