import React from 'react';
import Typography from '@material-ui/core/Typography';

const User = (props) => {
  const { name, email, address } = props;

  return (
    <div>
      <Typography
        variant="h6"
        component="h4"
      >
        {name}
      </Typography>
      <address>
        <div>
          <a href={`mailto: ${email}`}>{email}</a>
        </div>
        {
          address
          && (
          <div>
            <span>{address.city}</span>
            <span>{address.street}</span>
            <span>{address.suite}</span>
          </div>
          )
        }
      </address>
    </div>
  );
};

export default User;
