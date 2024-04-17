import React from 'react';
import logo from './logo.svg';
import './App.css'
import SortTable from './components/SortTable/SortTable';
import PhoneInput from './components/PhoneInput/PhoneInput';

function App(props) {
  return (
    <div className="App">
      <Welcome />
      <PhoneInput flags={props.flags} />
      <SortTable products={props.products} headings={props.headings}/>
    </div>
  );
}

const Welcome = () => {
  return (
    <div className="App-header">
      <h1>Качалюк Сергей</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Лабораторная работа 3</h1>
    </div>
  );
}

export default App;
