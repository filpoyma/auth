import React from 'react';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const name = useSelector((state) => state.auth.user);
  return <h2>This is a profile page. Hello, {name}.</h2>;
};

export default ProfilePage;
