import React from 'react';

const UserCard = ({ user }) => (
  <div className="card">
    <h3>{user.name}</h3>
    <p>Domain: {user.domain}</p>
    <p>Gender: {user.gender}</p>
    <p>Available: {user.available ? 'Yes' : 'No'}</p>
  </div>
);

export default UserCard;
