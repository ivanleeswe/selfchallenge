import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
import Cards from './Cards';

import orders from './data';
import worker from './data2';


function App() {
  const[orderWorker, setOrderWorker] = useState([]);
  const[isOpen, setIsOpen] = useState(true);
  const[nameInput, setNameInput] = useState('');


    useEffect(() => {
      displayData();
    }, [])

  const displayData = () => {
    let orderData = orders.orders
    let workerData = worker.worker
    let orderWorkerArr = [];

    for(let i = 0; i < orderData.length; i++) {
      for(let j = 0; j < workerData.length; j++) {
        if(orderData[i].workerId.toString() === workerData[j].id) {
            orderWorkerArr.push([orderData[i], workerData[j]] )
        }
      }
    }
    setOrderWorker(orderWorkerArr)
  }


  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const getData = (name) => {
    setNameInput(name);
  }



  return (
    <div>
      <Form getData={getData} orderWorker={orderWorker} toggle={toggle}/>
      <Cards orderWorker={orderWorker} isOpen={isOpen} nameInput={nameInput}/>
    </div>
  );
}

export default App;
