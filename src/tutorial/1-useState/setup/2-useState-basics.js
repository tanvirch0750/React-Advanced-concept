import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('Tanvir Chowdhury');

  const changeNameHandler = () =>
    text === 'Tanvir Chowdhury'
      ? setText('Israk Chowdhury')
      : setText('Tanvir Chowdhury');

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={changeNameHandler}>
        Change Name
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
