import React, { Fragment, Row, Col, Clearfix } from "react";
import { Route } from "react-router-dom";
import ChannelsList from "./ChannelsList";
import PostsContainer from "./PostsContainer.js";
import PostForm from "../components/PostForm";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
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

const SlackPage = ({ match, channels, posts }) => (
  <div className="page">
    <Grid item xs={3}>
      <Paper className={useStyles().paper}>
        <ChannelsList channels={channels} />
        <Route
          exact
          path={match.url}
          render={() => <h3>Welcome to SlackChat!</h3>}
        />
      </Paper>
    </Grid>
    <Grid item xs={9}>
      <Paper className={useStyles().paper}>
        <Route
          path={`${match.url}/:channelId`}
          render={(routerProps) => (
            <div>
              <PostsContainer
                {...routerProps}
                channels={channels}
                posts={posts}
              />
              <PostForm {...routerProps} channels={channels} />
            </div>
          )}
        />
      </Paper>
    </Grid>
  </div>
);

export default SlackPage;
