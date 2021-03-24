import _ from 'lodash';
import React from 'react';
import Card from './Card';

import "./Cards.css";

function Cards({order, person}) {
  return (
    <div>
      {_.zip(order, person).map((value) => {
        return (
          <div>
            <Card value={value} key={value[0].id}/>
          </div>
        )
      })}
    </div>
  )
}

export default Cards
