import React, {useState} from 'react';

import './Form.css';

function Form({getData, toggle}) {
  const[input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    getData(input);
    setInput("");
  }

  const handleToggle = () => {
    toggle();
  }
  

  return (
  <div className="form"> 
    <form onSubmit={handleSubmit}>
      <input className="search__input" type="text" value={input} onChange={e => setInput(e.target.value)}>
      </input> 
    </form>
    <label className="switch" >
      <input type="checkbox" onClick={handleToggle}/>
      <span className="slider round" ></span>
    </label>
  </div>
 

  )
}

export default Form
