import React from 'react';
import Axios from 'axios';

class Game extends React.Component{
   state = {
       persons: []
   } 
   componentDidMount(){
       Axios.get(' http://anapioficeandfire.com/api/characters/583');
       .then(resp => {
           console.log(res);
           this.setState({persons: resp.data});
       });
   }
   render(){
       return (
           <ul>
               {this.state.persons.map(person => <li> {person.name} </li>)}
           </ul>;
       )
   }
}
export default Game;