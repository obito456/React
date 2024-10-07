import React, { useState } from 'react';

function ABC() {
    const [name, setName] = useState('');
    const handleChange = (e) => {
      setName(e.target.value);
    };
    return (
      <div>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <p>Your name is: {name}</p>
      </div>
    );
}

export default ABC;
