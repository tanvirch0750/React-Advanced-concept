import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Tanvir',
    age: 21,
    job: 'He is a frontend developer',
  });

  const changeJobHandler = () => {
    if (person.job === 'He is a frontend developer') {
      setPerson({ ...person, job: 'He is a Designer' });
    } else {
      setPerson({ ...person, job: 'He is a frontend developer' });
    }
  };

  return (
    <div>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.job}</h3>
      <button type="button" className="btn" onClick={changeJobHandler}>
        Change Job
      </button>
    </div>
  );
};

export default UseStateObject;
