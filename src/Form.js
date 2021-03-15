import React, {useState} from 'react';

import './Form.css';

function Form({getData}) {
  const[input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    getData(input);
    setInput("");
  }

  return (
  <div className="form"> 
    <form onSubmit={handleSubmit}>
      <input className="search__input" type="text" value={input} onChange={e => setInput(e.target.value)}>
      </input> 
    </form>
    <label class="switch">
      <input type="checkbox"/>
      <span class="slider round"></span>
    </label>
  </div>
 

  )
}

export default Form
