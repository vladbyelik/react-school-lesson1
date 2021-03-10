import logo from './logo.svg';
import './App.css';
import React from 'react';
import TextGoodBye from './components/TextGoodBye';
import { TextHello, SomeText } from './components/TextHello';

const AppExample = () => {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <TextHello />
      <TextHello />
      <TextHello />
      <SomeText />
      <TextGoodBye />
    </div>
  );
}

export default AppExample;
