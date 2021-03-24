import React from 'react';

import './Card.css';

function Card({data, isOpen}) {

  return (
    <div className="card">
      {data[0].deadline}
      {data[0].description}
      {data[0].id}
      {data[0].name}
      {data[0].workerId}
      {data[1].id}
      {data[1].name}
      {data[1].email}
      {data[1].companyName}
    </div>
  )
}

export default Card
