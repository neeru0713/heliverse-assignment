import React from 'react';

const TeamDetails = ({ team }) => (
  <div className="team-details">
    <h3>Team Name: {team.name}</h3>
    <ul>
      {team.members.map(member => (
        <li key={member._id}>{member.name} - {member.domain}</li>
      ))}
    </ul>
  </div>
);

export default TeamDetails;
