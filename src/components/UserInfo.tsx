import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  is_active: boolean;
  avatar: string | null;
  type: string;
  created: string;
  modified: string;
  role: string;
}

interface Tokens {
  refresh: string;
  access: string;
}

interface UserInfoProps {
  user: User;
  tokens: Tokens;
}

const UserInfo: React.FC<UserInfoProps> = ({ user, tokens }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Information</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
        <h2 className="text-xl font-semibold">User</h2>
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Active:</strong> {user.is_active ? 'Yes' : 'No'}</p>
        <p><strong>Type:</strong> {user.type}</p>
        <p><strong>Created:</strong> {new Date(user.created).toLocaleString()}</p>
        <p><strong>Modified:</strong> {new Date(user.modified).toLocaleString()}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold">Tokens</h2>
        <p><strong>Refresh Token:</strong> {tokens.refresh}</p>
        <p><strong>Access Token:</strong> {tokens.access}</p>
      </div>
    </div>
  );
};

export default UserInfo;
