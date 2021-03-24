import React from 'react';

import './Card.css';

function Card({value}) {
  return (
    <div>
      {value[0].deadline}
      {value[0].description}
      {value[0].id}
      {value[0].name}
      {value[0].workId}
      {value[1].id}
      {value[1].name}
      {value[1].email}
      {value[1].companyName}
    </div>
  )
}

export default Card
