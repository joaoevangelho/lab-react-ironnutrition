import React, { Component } from 'react';
import './App.scss';
import foods from './foods.json';
import foodList from './foods';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';

class App extends Component {
  state = {
    foods: foods
  };

  addFoodHandler = (event, food) => {
    event.preventDefault();
    this.setState({
      foods: [food, ...this.state.foods]
    });
  };

  render() {
    return (
      <div>
        <button>Add food</button>
        <AddFood addFood={this.addFoodHandler} />
        <FoodBox foods={this.state.foods} />
      </div>
    );
  }
}

export default App;
