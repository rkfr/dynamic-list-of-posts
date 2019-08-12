import React from 'react';
import { ListItem, Box } from '@material-ui/core';
import User from './User';

const Comment = ({ name, email, body }) => (
  <ListItem>
    <User
      name={name}
      email={email}
    />
    <Box>{body}</Box>
  </ListItem>
);

export default Comment;
