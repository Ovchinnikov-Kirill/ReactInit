import {Component, StrictMode} from 'react';
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

////////About props
// function WhoAmI({name, surname, link}) {
//   return (
//     <div>
//       <h1>My name is {name.firstName}, surname - {surname}</h1>
//       <a href={link}>My profile</a>
//     </div>
//   )
// }

class WhoAmI extends Component{
  constructor(props) {
    super(props);
    this.state = {
      years: 28
    }
  }

  nextYear = () => {
    console.log('+++');
    // this.setState({
    //   years: this.state.years + 1
    // })
    this.setState(state => ({
      years: state.years + 1
    }))
  }

  render() {
    const {name, surname, link} = this.props;
    return (
          <div>
            <button onClick={this.nextYear}>+++</button>
            <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
            <a href={link}>My profile</a>
          </div>
        )
  }
}

function App() {
  return (
    <div className="App">
      <StrictMode>
        <Header/>
      </StrictMode>
      <Field/>
      <Btn/>
      <WhoAmI name='John' surname="Smith" link="facebook.com"/>
      <WhoAmI name='Kirill' surname="Ovchinnikov" link="facebook.com"/>
    </div>
  );
}

export default App;
