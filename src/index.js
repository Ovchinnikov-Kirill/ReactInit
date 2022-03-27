import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const text = 'Hello world!';

const elem = (
  <div>
    <h2 className='text'>{text}</h2>
    <input type="text"/>
    <button tabIndex={0}>button</button>
  </div>
);

ReactDOM.render(
  elem,
  document.getElementById('root')
);