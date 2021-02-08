import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = id => {
    let newPeople = people.filter(person => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <div>
      {people.map(person => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h3>{name}</h3>
            <button
              type="button"
              className="btn"
              onClick={() => removeItem(id)}
            >
              Remove
            </button>
          </div>
        );
      })}

      <button type="button" className="btn" onClick={() => setPeople([])}>
        Clear All Items
      </button>
    </div>
  );
};

export default UseStateArray;
