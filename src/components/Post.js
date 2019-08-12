import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, ListItem } from '@material-ui/core';
import User from './User';
import CommentList from './CommentList';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const Post = ({
  title, body, user, comments,
}) => {
  const classes = useStyles();

  return (
    <ListItem>
      <Paper className={classes.root}>
        <Typography
          component="h2"
          variant="h5"
        >
          {title}
        </Typography>
        <Typography
          component="p"
        >
          {body}
        </Typography>
        <User {...user} />
        <CommentList comments={comments} />
      </Paper>

    </ListItem>
  );
};

export default Post;
