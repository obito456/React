import React, { useState } from 'react';

function ABC() {
  const [name, setName] = useState('');
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Your name is: {name}</p>
    </div>
  );
}

export default ABC;
