import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
import Cards from './Cards';

import workerData from './data'

function App() {
  const allData = workerData;
  const[input, setInput] = useState('');


  const getData = (input) => {
    setInput(input);
  }

  return (
    <div>
      <Form getData={getData}/>
      <Cards allData={allData.orders}/>
    </div>
  );
}

export default App;
