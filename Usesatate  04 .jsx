import React, { useState } from 'react';

function ABC() {
  const [user, setUser] = useState({ name: '', age: '' });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={user.name}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Enter your age"
        value={user.age}
        onChange={handleInputChange}
      />
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default ABC;
