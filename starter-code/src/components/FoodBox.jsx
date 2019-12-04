// import React from 'react';
import foodList from './../foods.json';

import React, { Component } from 'react';

class FoodBox extends Component {
  render() {
    return (
      <div className="media">
        {foodList.map(food => {
          return (
            <div>
              <img
                src={food.image}
                className="img-thumbnail mr-3 mw-25 border-0"
                style={{ maxWidth: '10em' }}
              />
              <div className="media-body align-self-center">
                <h5 className="mt-0 mb-1">{food.name}</h5>
                <small>{food.calories}</small>
              </div>
              <form className="row align-self-center">
                <input className="form-control col-9" type="number" value="1" />
                <button className="btn btn-primary col-3">+</button>
              </form>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FoodBox;
