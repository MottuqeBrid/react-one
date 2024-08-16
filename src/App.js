import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>my first paragraph</p>
        <Person name="Rubel Nayok"></Person>
        <Person name="josim"></Person>
        <Person name="Razzak"></Person>
      </header>
    </div>
  );
}

function Person(props) {
  const personstyle = {
    backgroundColor: 'blue',
    color: '#fff'
  }
  console.log(props)
  return (
    <div style={{ border: '2px solid red', padding: '10px', margin: '10px' }}>
      <h1 style={personstyle}>Name: {props.name}</h1>
      <h3>Hero off the year</h3>
    </div>
  )
}

export default App;
