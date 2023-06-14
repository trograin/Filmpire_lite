import './App.css';

/**
 * 
 * @param {*} props 
 * @returns Component
 */
const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  );
}

/**
 * 
 * @returns App DIV
 */
const App = () => {
  return (
    <div className="App">
      <Person 
        name={'Boban'} 
        lastName={'Alempijevic'} 
        age={44}
      />
      <Person
        name={'Petra'}
        lastName={'Hultin'}
        age={30}
      />
    </div>
  );
}

export default App;
