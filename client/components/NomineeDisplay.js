import React from 'react';

const NomineeDisplay = props => {
  const nominees = props.category.nominees || [];
  return (
    <ul>
      {nominees.map((nom, i) => (
        <li key={i}>{nom.name}</li>
      ))}
    </ul>
  );
};

export default NomineeDisplay;
