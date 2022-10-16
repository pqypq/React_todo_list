import React, {Component} from 'react';
import FirstComponent, {SecondComponent, ThirdComponent} from './components/learning-examples/FirstComponent';
import Counter from './components/counter/Counter';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className = "App">
        <Counter by={1}/>
        <Counter by={5}/>
        <Counter by={10}/>
      </div>
    )
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div className = "Learning Components">
//         <FirstComponent></FirstComponent>
//         <SecondComponent></SecondComponent>
//         <ThirdComponent></ThirdComponent>
//       </div>
//     )
//   }
// }

export default App;