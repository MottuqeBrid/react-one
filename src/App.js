import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { clear } from '@testing-library/user-event/dist/clear';

function App() {
  const nayoks = ['Razak', 'Alomgir', 'Jasim', 'Salman', 'Bappi', 'Dipjol', 'Shuvo']
  const product = [
    { name: 'photoshop', price: '$90.99' },
    { name: 'Preamerpro', price: '$98.99' },
    { name: 'PDF reader', price: '$228.99' }

  ]
  const productName = product.map(product => product.name);
  // console.log(productName)
  return (
    <div className="App">
      <header className="App-header">
        <p>my first paragraph</p>
        <User></User>
        <Counter></Counter>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            product.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          product.map(product => <Product products={product}></Product>)
        }
        {/* <Product products={product[0]}></Product>
        <Product products={product[1]}></Product>
        <Product products={product[2]}></Product> */}
        <Person name="Rubel Nayok"></Person>
        <Person name="josim"></Person>
        <Person name="Razzak"></Person>
      </header>
    </div>
  );
}


function User() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])
  return (
    <div>
      <h3>dynamic user: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  const handelIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handelIncrease}>Increase</button>
    </div>
  )
}


function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '250px',
    width: '250px',
    float: 'left'
  }
  const { name, price } = props.products;
  // console.log(name, price);
  // console.log(props);
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Buy Now</button>
    </div>
  )
}


function Person(props) {
  const personstyle = {
    backgroundColor: 'blue',
    color: '#fff'
  }

  return (
    <div style={{ border: '2px solid red', padding: '10px', margin: '10px' }}>
      <h1 style={personstyle}>Name: {props.name}</h1>
      <h3>Hero off the year</h3>
    </div>
  )
}

export default App;
