import React, { Component } from 'react';
import LocationSearchInput from './component_form_autocomplete';

import postTAE from './helper_postTAEdetails';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    //Declare state
    this.state = {
      item_type:'E',
      trip_id: 2
    }
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
  }

  handleChangeStartDate(date) {
    const parsedDate = Date.parse(date);
    this.setState({
      startDate: parsedDate,
    });
  }

  handlesSubmit = (event)=>{
    event.preventDefault();
    console.log(this.state)
    postTAE(this.state) 
  }
  onChangeVenue = (venue) => {
    this.setState({venue})
  }
  onChangeLatLng = (latlng) => {
    this.setState({
      geo_location: latlng
    })
    console.log("state change!", this.state)    
  }


  render() {
    return (
      <div class="create-form-container">
        <div class="form-title">
        <h4 class="card-title">Add/Edit Event</h4>
        </div>
        <form onSubmit={this.handlesSubmit}>
          <div class="row form-group">
            <label for="title" class="col-sm-3 col-form-label">Title</label>
            <input type="text" class="form-control col-sm-9" name="title" placeholder="Example: Dinner @ local eatery, Guided tour of the Pyramids" />
          </div>
          <div class="row form-group">
            <label for="dt_start" class="col-sm-3 col-form-label">Event time:</label>
            <DatePicker
              name="time_start"
              placeholderText = "Click to select"
              selected = {this.state.startDate}
              onChange = {this.handleChangeStartDate}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={30}
              dateFormat="dd/MM/YYYY h:mm aa"
              timeCaption="time"
              className = "form-control col-sm-10"
              required
            />
          </div>
          <div class="row form-group">
          <label for="confirmation" class="col-sm-3 col-form-label">Reservation #:</label>
            <input 
              type="text" 
              class="form-control col-sm-9" 
              name="confirmation"
              onChange = {this.onChangeHandler}
              value = {this.state.confirmation}
            />
            </div>
          <div class="row form-group" id="locationField">
            <label for="venue" class="col-sm-3 col-form-label">Venue: </label>
              <LocationSearchInput
                type="text" 
                className="form-control col-sm-10" 
                name="venue" 
                placeholder="Hotel" 
                handleAddress = {this.onChangeVenue}
                handleLatLng = {this.onChangeLatLng}
              />
          </div>
          <div class="row form-group">
            <label for="details" class="col-sm-3 col-form-label">Details:</label>
            <textarea 
              className="form-control col-sm-9"
              name="details"
              onChange = {this.onChangeHandler}
              value = {this.state.details}>
            </textarea>
          </div>
          <div class ="form-group">
            {/* <a role="button" class="btn btn-outline-primary" href="#">Upload files</a> */}
          </div>
          <div class="form-group">
            <button type="submit" class="col-sm-12 btn btn-primary">Submit</button>
          </div>
        </form>
    </div>
    )
  }
}

export default CreateEvent;