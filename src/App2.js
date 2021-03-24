import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
import Cards from './Cards';

import orders from './data';
import worker from './data2';


function App() {
  const[orderData, setOrderData] = useState('');
  const[workerData, setWorkerData] = useState('');
  const[order, setOrder] = useState('');
  const[person, setPerson] = useState('');
  
  useEffect(() => {
    setOrderData(orders);
    setWorkerData(worker);
  })

  const getData = (name) => {
    const orderArr = [];
    const workerArr = [];

    for(let i = 0; i < workerData.worker.length; i++) {
      const workerName = workerData.worker[i].name;
      const workerId = workerData.worker[i].id
      const workerAll = workerData.worker[i]


      if(workerName === name) {
        for(let i = 0; i < orderData.orders.length; i++) {
          if(orderData.orders[i].workerId.toString() === workerId) {
            orderArr.push(orderData.orders[i])
            workerArr.push(workerAll)
          }
        }
      }
    }
    setOrder(orderArr);
    setPerson(workerArr);
  }


  return (
    <div>
      <Form getData={getData}/>
      <Cards order={order} person={person}/>
    </div>
  );
}

export default App;

  // useEffect(() => { 
  //   axios.get('https://api.hatchways.io/assessment/work_orders')
  //     .then((data) => {
  //       setOrderData(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }, []);



  // const getData = (input) => {
  //   let string;

  //   for(let i = 0; i < 31; i++) {
  //     string = `https://api.hatchways.io/assessment/workers/${i}`
  //     if(input === i) {
  //       axios.get(string)
  //     .then((data) => {
  //       setWorkerData(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //   }  
  // }

  //   setInput(input);
  // }
