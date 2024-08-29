import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/userSlice';
import UserCard from '../components/UserCard';

const HomePage = () => {
  const dispatch = useDispatch();
  const { list: users, status } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Failed to load users</p>;

  return (
    <div className="user-list">
      {users.map(user => (
        <UserCard key={user._id} user={user} />
      ))}
    </div>
  );
};

export default HomePage;
