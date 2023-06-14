import { useState, useEffect } from 'react';
import './App.css';


/**
 * 
 * @returns App DIV
 */
const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(100);
  }, []); //dependency array. When it is empty, the code inside the function will ONLY happenat the inital load of the component
  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((addCount) => addCount + 1)}>+</button>
    </div>
  );
}

export default App;
