import React, { Component } from 'react'
//import './App.css';
import Axios from 'axios';

export default class Robert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: []
    }
  }

  componentDidMount() {

    Axios.get("https://www.anapioficeandfire.com/api/characters/901").then(res => {
  
      
      const alias = res.data.aliases[1];  
 
      console.log("coastOfArms: " + alias  );
     
      this.setState({data:alias})
    })
    .catch(error => {
      console.log('there is an error', error)
    })
  
  }

  render() {
    return (
      <div>
        <h2>6. What is Robert Baratheon's second alias?</h2>
        <h4>Robert Baratheon's Aliases is {this.state.data}.</h4>        
      </div>
    )
  }
}