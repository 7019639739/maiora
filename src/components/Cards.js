import React from 'react';

const Cards = ({ data }) => {
  return (
    <div className="cards">
      {data.map(item => (
        <div key={item.id} className="card">
          <h3>{item.title}</h3>
          <p>ID: {item.id}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
