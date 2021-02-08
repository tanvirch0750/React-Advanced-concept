import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    document.title = `New value (${value})`;
  }, [value]);

  useEffect(() => {
    console.log('hello world');
  }, []);

  return (
    <div>
      <h1>{value}</h1>
      <button type="button" className="btn" onClick={() => setValue(value + 1)}>
        Click me
      </button>
    </div>
  );
};

export default UseEffectBasics;
