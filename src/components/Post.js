import React from 'react';
import { Paper, Typography, ListItem } from '@material-ui/core';
import User from './User';
import CommentList from './CommentList';

const Post = ({ postData }) => {
  const {
    title, body, user: { name, email, address }, comments,
  } = postData;

  return (
    <ListItem>
      <Paper>
        <Typography
          component="h2"
        >
          {title}
        </Typography>
        <Typography
          component="p"
        >
          {body}
        </Typography>
        <User
          name={name}
          email={email}
          address={address}
        />
        <CommentList comments={comments} />
      </Paper>

    </ListItem>
  );
};

export default Post;
