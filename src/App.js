import {Component} from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello World!</h2>
}

// const Field = () => {
//   const holder = 'Enter here';
//   const styledField = {
//     width: '300px'
//   }
//   return <input 
//     type="text" 
//     placeholder={holder} 
//     style={styledField}/>
// }

class Field extends Component {
  render() {
    const holder = 'Enter here';
    const styledField = {
    width: '300px'
  }

  return <input 
          type="text" 
          placeholder={holder} 
          style={styledField}/>
  }
}

const Btn = function() {
  const text = 'click';
  const logged = false;
  return <button>{logged ? text : 'noclick'}</button>
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>
    </div>
  );
}

export default App;
