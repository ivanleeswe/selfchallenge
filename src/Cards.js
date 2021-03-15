import React from 'react';
import Card from './Card';

import "./Cards.css";

function Cards({allData}) {

  console.log(allData)
  return (
    <div className="cards">
      {allData.map(worker => {
              return (
                  <Card worker={worker} key={worker.id}/>
              )
          })}
    </div>
  )
}

export default Cards
