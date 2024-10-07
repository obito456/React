import React from 'react';

function ABC() {
    const handleClick = (e) => {
        e.preventDefault();
        alert('Link click prevented!');
      };
    
      return (
        <a href="https://www.youtube.com/" onClick={handleClick}>
          Click me
        </a>
      );
}

export default ABC;
