import React from 'react';

import './Card.css';

function Card({worker}) {
  return (
    <div className="card">
      {worker.name}
      {"  "}
      {worker.workerId}
    </div>
  )
}

export default Card
