import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  render(){
      return (
        <div className="gray-background">
            <img src={logo} alt="logo" />
            <p> Let's develope management system ~ ~~~
            </p>
        </div>
    );
  }
}

export default App;
