import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return isAuthenticated && (
    <div style={{ fontSize: '5px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
      <div style={{ marginRight: '10px' }}>
        <h2>{user.name}</h2>
        
      </div>
      <img src={user.picture} alt={user.name} style={{ width: '30px' }} />
    </div>
  );
};

export default Profile;