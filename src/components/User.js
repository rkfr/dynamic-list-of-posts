import React from 'react';

const User = (props) => {
  const { name, email, address } = props;

  return (
    <div className="user">
      <h3 className="user__name">{name}</h3>
      <address className="user__adress">
        <div>
          <a href={`mailto: ${email}`}>{email}</a>
        </div>
        {
          address
          && (
          <div>
            <span className="address-item">{address.city}</span>
            <span className="address-item">{address.street}</span>
            <span className="address-item">{address.suite}</span>
          </div>
          )
        }
      </address>
    </div>
  );
};

export default User;
