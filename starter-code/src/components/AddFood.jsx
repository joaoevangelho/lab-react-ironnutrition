import React, { Component } from 'react';

class AddFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      calories: '',
      image: ''
    };
  }

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.props.addFood(this.state);
  //   this.setState({
  //     name: '',
  //     calories: '',
  //     image: ''
  //   });
  // };

  handleNameInput = event => {
    this.setState({
      name: event.target.value
    });
  };
  handleCaloriesInput = event => {
    this.setState({
      calories: event.target.value
    });
  };
  handleImageInput = event => {
    this.setState({
      image: event.target.value
    });
  };
  render() {
    return (
      <div>
        <form
          onSubmit={event => {
            this.props.addFood(event, this.state);
          }}
          encType="multipart/form-data"
        >
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.handleNameInput(e)}
          />
          <label>Calories:</label>
          <input
            type="text"
            name="calories"
            value={this.state.calories}
            onChange={e => this.handleCaloriesInput(e)}
          />
          <label>Image:</label>
          <input
            type="text"
            name="image"
            checked={this.state.image}
            onChange={e => this.handleImageInput(e)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddFood;
