import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import User from './User';

const Comment = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <ListItem>
      <User
        name={name}
        email={email}
      />
      <div>{body}</div>
    </ListItem>
  );
};

export default Comment;
