import React, { Component } from 'react'
//import './App.css';
import Axios from 'axios';

export default class Stark extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: []
    }
  }

  componentDidMount() {

    Axios.get("https://www.anapioficeandfire.com/api/characters/209").then(res => {
      const founderNameUrl = res.data.founder; 
      return Axios.get(founderNameUrl)
    })
    .then(res => {
        const founderName= res.data.name;
        this.setState({data: founderName})
    })
    .catch(error => {
      console.log('there is an error', error)
    })
  
  }

  render() {
    return (
      <div>
        <h2>7. What's the name of the founder of House Stark?</h2>
        <h4>The founder of House Stark is {this.state.data}.</h4>        
      </div>
    )
  }
}


//links not working! check before submitting