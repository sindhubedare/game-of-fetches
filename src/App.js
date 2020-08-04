import React from 'react';
import './App.css';
import JonSnowBorn from './Component/JonSnowBorn';
import MargaeryBorn from './Component/MargaeryBorn';
import HouseTargaryen from './Component/HouseTargaryen';
import HouseLannister from './Component/HouseLannister';


function App() {
  return (
    <div className="App">
    <JonSnowBorn />
    <MargaeryBorn />
    <HouseTargaryen />
    <HouseLannister />
    </div>
  );
}

export default App;
