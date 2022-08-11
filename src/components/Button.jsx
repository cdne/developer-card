import React from 'react';

const Button = () => {
  return (
    <div className='button-container'>
      <button className='email'>
        <span className='icon'></span> Email
      </button>
      <button className='linkedin'>
        <span className='icon'></span> LinkedIn
      </button>
    </div>
  );
};

export default Button;
