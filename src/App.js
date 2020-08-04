import React from 'react';
import './App.css';
import JonSnowBorn from './Component/JonSnowBorn';
import MargaeryBorn from './Component/MargaeryBorn';
import HouseTargaryen from './Component/HouseTargaryen';
import HouseLannister from './Component/HouseLannister';
import Baratheon from './Component/Baratheon';
import Stark from './Component/Stark';
import Robert from './Component/Robert';
import BookTitle from './Component/BookTitle';


function App() {
  return (
    <div className="App">
    <JonSnowBorn />
    <MargaeryBorn />
    <HouseTargaryen />
    <HouseLannister />
    <Baratheon />
    <Robert />
    <Stark />
    <BookTitle />
   
    </div>
  );
}

export default App;
