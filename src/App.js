import './App.css';
import { useState } from 'react'
import {listQs} from './listQs'
function App() {
  const [number, setNumber] = useState(0)
  
  const randomNumber = () => {
    setNumber(number => number =Math.floor(Math.random() * 90))
  }

  return (
    <>
        <div className="App">
          <div className="Container">
            <h2 className="question">{listQs[number].qs}</h2>
            <button className="button" onClick={randomNumber}>
              Click
            </button>
          </div>
        </div>
    </>
  );
}

export default App;
