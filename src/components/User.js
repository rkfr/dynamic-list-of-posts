import React from 'react';

const User = ({ userData, showFullData }) => {
  const { name, email, address: { city, street, suite } } = userData;

  return (
    <div className="user">
      <h3 className="user__name">{name}</h3>
      <address className="user__adress">
        <div>
          <a href={`mailto: ${email}`}>{email}</a>
        </div>
        {
          showFullData
          && (
          <div>
            <span className="address-item">{city}</span>
            <span className="address-item">{street}</span>
            <span className="address-item">{suite}</span>
          </div>
          )
        }
      </address>
    </div>
  );
};

export default User;
