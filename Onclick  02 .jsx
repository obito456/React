import React from 'react';

function ABC() {
  const send = (message) => {
    alert(message);
  };
  return (
    <div>
      <button onClick={() => send('Hello, Vijay!')}>Click me</button>
    </div>
  );
}

export default ABC;
