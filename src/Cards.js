import React, { useState } from 'react';
import Card from './Card';

import "./Cards.css";

function Cards({orderWorker, isOpen, nameInput}) {

  if(nameInput === "") {
    orderWorker.sort((a, b) => {
      return isOpen ? a[0].deadline - b[0].deadline : b[0].deadline - a[0].deadline
    })
    return (
      <div className="cards">
        {orderWorker.map((data) => {
          return (
            <div>
              <Card data={data} isOpen={isOpen}/>
            </div>
          )
        })}
      </div>
    )
  } else if(nameInput !== "") {
    let inputArr = [];

    for(let i = 0; i < orderWorker.length; i++) {
      if(orderWorker[i][1].name === nameInput) {
        inputArr.push(orderWorker[i])
      }
    }

    inputArr.sort((a, b) => {
      return isOpen ? a[0].deadline - b[0].deadline : b[0].deadline - a[0].deadline
    })

    return (
      <div className="cards">
        {inputArr.map((data) => {
          return (
            <div>
              <Card data={data} isOpen={isOpen}/>
            </div>
          )
        })}
      </div>
    )
  }






  // return (
  //   <div className="cards">
  //     {orderWorker.map((data) => {
  //       return (
  //         <div>
  //           <Card data={data} isOpen={isOpen}/>
  //         </div>
  //       )
  //     })}
  //   </div>
  // )
}

export default Cards

 // orderWorker.sort((a, b) => {a[0].deadline - b[0].deadline})



 


  // let dataArr = [];

  // console.log(orderWorker)

  
  // for(let i = 0; i < orderWorker.length; i++) {
  //   orderWorker.sort((a, b) => {a[0].deadline - b[0].deadline})
  //   console.log(orderWorker[i][0].deadline)
  //   console.log(orderWorker[i])
  // }
