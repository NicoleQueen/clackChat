import React, { Fragment, Row, Col, Clearfix } from "react";
import { Route } from "react-router-dom";
import ChannelsList from "./ChannelsList";
import PostsContainer from "./PostsContainer.js";
import PostForm from "../components/PostForm";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Welcome from "../components/Welcome";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
}));

const SlackPage = ({
  match,
  channels,
  posts,
  user,
  addPost,
  deletePost,
  users,
  search,
  renderSearchPage,
}) => (
  <div className="page">
    <Grid item xs={2} className="grid1">
      <Paper className={useStyles().paper} id="paper1">
        <ChannelsList channels={channels} user={user} users={users} />
      </Paper>
    </Grid>
    <Grid item xs={10} className="grid1">
      <Paper className={useStyles().paper} id="paper2">
        <Route exact path={match.url} render={() => <Welcome />} />
        <Route path="/channels/#search" render={renderSearchPage} />
        <Route
          path={`${match.url}/:channelId`}
          render={(routerProps) => (
            <div>
              {/* {search ? (
                console.log(1)
              ) : ( */}
              {/* // renderSearchPage() */}
              <PostsContainer
                componentDidMount={console.log(search)}
                {...routerProps}
                channels={channels}
                posts={posts}
                deletePost={deletePost}
              />
              {/* )} */}
              <footer id="post_form">
                <PostForm
                  {...routerProps}
                  channels={channels}
                  user={user}
                  addPost={addPost}
                />
              </footer>
            </div>
          )}
        />
      </Paper>
    </Grid>
  </div>
);

export default SlackPage;
