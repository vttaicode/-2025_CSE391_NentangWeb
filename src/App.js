import React from 'react';
import CounterFunction from './CounterFunction';
import CounterClass from './CounterClass';
import ProfileCard from './ProfileCard';
import avatarImg from './assets/conmeo.jpg'; 

function App() {
  return (
    <div className="container">
      <h2>🔁 Counter Demo</h2>
      <h4>Function Component:</h4>
      <CounterFunction />
      <h4>Class Component:</h4>
      <CounterClass />

      <hr />
      <h2>🐾 Profile Card Demo</h2>
      <ProfileCard name="Con meo" avatar={avatarImg} />
    </div>
  );
}

export default App;
