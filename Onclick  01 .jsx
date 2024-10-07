import React from 'react';

function ABC() {
  const handleClick = () => {
    alert(`Don't click me`);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default ABC;
