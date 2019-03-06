import React, { Component } from 'react';
import axios from 'axios';
import LocationSearchInput from './component_form_autocomplete';

class CreateTrip extends Component {
  constructor(props) {
    super(props);
    // Declare State
    this.state = {
      title: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChangeTitle = (event)=>{
    this.setState({title: event.target.value})
    console.log("state change!", this.state)
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/api/v1/itineraries', this.state)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  render() {
   
    return (
      <div className="create-form-container">
        <div className="form-title">
          <h4 className="card-title">Create New Trip</h4>
        </div>
      <form className="form-inline m-sm-1" onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            name="Trip-name" 
            className="form-control w-75 mr-sm-3" 
            placeholder="Example: Trip to India, Weekend getaway in Victoria etc."
            onChange={this.onChangeTitle}
            value={this.state.title}
            required
          />
          <button type="submit" className="btn btn-primary">Start Planning!</button>
      </form>
    </div>
    )
  }
}

export default CreateTrip;
