import logo from './logo.svg';
import './App.css';
import Path-Perceive from "./Path-Perceive/popup.jsx";
import { Tutorial } from './Path-Perceive/Tutorial/Tutorial.jsx';

function App() {
  return (
    <div className="App">
      <Path-Perceive>
        <div className="PopUp"></div>
        <Tutorial/>
      </Path-Perceive>
    </div>
  );
}

export default App;
