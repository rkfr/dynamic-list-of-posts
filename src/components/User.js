import React from 'react';
import { Typography, Box } from '@material-ui/core';

const User = ({ name, email, address }) => (
  <Box>
    <Typography
      variant="h6"
      component="h4"
    >
      {name}
    </Typography>
    <address>
      <Box>
        <a href={`mailto: ${email}`}>{email}</a>
      </Box>
      {
        address
        && (
        <Box>
          <span>{address.city}</span>
          <span>{address.street}</span>
          <span>{address.suite}</span>
        </Box>
        )
      }
    </address>
  </Box>
);

export default User;
