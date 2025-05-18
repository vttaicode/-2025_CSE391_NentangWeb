import React from 'react';

function ProfileCard({ name, avatar }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: 10, width: 200 }}>
      <img src={avatar} alt="avatar" style={{ width: '100%', borderRadius: '50%' }} />
      <h4>{name}</h4>
    </div>
  );
}

export default ProfileCard;

