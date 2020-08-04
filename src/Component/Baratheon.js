import React, { Component } from 'react'
//import './App.css';
import Axios from 'axios';

export default class Baratheon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: []
    }
  }

  componentDidMount() {

    Axios.get("https://www.anapioficeandfire.com/api/houses/17").then(res => {
      const seats = res.data.seats[1]; 
      console.log("seats : " + seats );
      this.setState({data:seats })
    })
    .catch(error => {
      console.log('there is an error', error)
    })
  
  }

  render() {
    return (
      <div>
        <h2>5. What is the second seat of House Baratheon?</h2>
        <h4>The second seat of House Baratheon is {this.state.data}.</h4>        
      </div>
    )
  }
}