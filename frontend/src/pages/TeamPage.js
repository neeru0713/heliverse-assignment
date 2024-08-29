import React from 'react';
import { useSelector } from 'react-redux';
import TeamDetails from '../components/TeamDetails';

const TeamPage = () => {
  const { team } = useSelector(state => state.team);

  if (!team) return <p>No team created yet.</p>;

  return (
    <div className="team-page">
      <TeamDetails team={team} />
    </div>
  );
};

export default TeamPage;
