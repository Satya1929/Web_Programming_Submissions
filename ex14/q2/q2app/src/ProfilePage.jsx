import React from 'react';
import ProfileImage from './ProfileImage';
import UserInfo from './UserInfo';
import UserPosts from './UserPosts';

const ProfilePage = () => {
  const user = {
    name: 'Satya',
    email: '@example.com',
    bio: 'I love coding.',
    imageUrl: 'https://placehold.co/600x400',
  };

  const posts = [
    { title: 'Post 1', content: 'This is the content of the first post.' },
    { title: 'Post 2', content: 'This is the content of the second post.' },
    { title: 'Post 3', content: 'This is the content of the third post.' },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>User Profile</h1>
      <ProfileImage imageUrl={user.imageUrl} />
      <UserInfo name={user.name} email={user.email} bio={user.bio} />
      <UserPosts posts={posts} />
    </div>
  );
};

export default ProfilePage;