import React from 'react';

const User = ({ userData }) => (
  <div className="user">
    <h3 className="user__name">{userData.name}</h3>
    <div>
      <a href={`mailto: ${userData.email}`}>{userData.email}</a>
    </div>
    <div className="user__adress">
      {userData.address.street}
    </div>
  </div>
);

export default User;
