import React, { Component } from 'react'
//import './App.css';
import Axios from 'axios';

export default class HouseLannister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: []
    }
  }

  componentDidMount() {

    Axios.get("https://www.anapioficeandfire.com/api/houses/229").then(res => {
  
      const coatOfArms = res.data.coatOfArms; 
      console.log("coastOfArms: " + coatOfArms);
     
      this.setState({data:coatOfArms})
    })
    .catch(error => {
      console.log('there is an error', error)
    })
  
  }

  render() {
    return (
      <div>
        <h2>4. What's the coat of arms of House Lannister?</h2>
        <h4>The coat of arms of House Lannister is {this.state.data}.</h4>        
      </div>
    )
  }
}