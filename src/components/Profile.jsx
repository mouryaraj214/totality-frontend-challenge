import React from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <img src={user.avatar} alt={user.username} style={{ borderRadius: '50%' }} />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
