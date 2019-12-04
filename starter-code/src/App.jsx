import React, { Component } from 'react';
import './App.scss';
import foods from './foods.json';
import foodList from './foods';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';

class App extends Component {
  render() {
    return (
      <div>
        <p>Sample App</p>
        <FoodBox />
        <AddFood />

      </div>
    );
  }
}

export default App;
