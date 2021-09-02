import React, { useState, useEffect } from 'react';
import './App.css';

// import racedays from './Data/racedays';
import PageHeader from './components/PageHeader/PageHeader';
import RaceSelector from './components/RaceSelector/RaceSelector';
import getRaceMeetings from './Services/getRaceMeetings/getRaceMeetings.js';
import getRaceData from './Services/getRaceData/getRaceData';
import getRaceList from './Services/getRaceList/getRaceList';
import RaceInfo from './components/RaceInfo/RaceInfo';
import getDateString from './Services/getDateString/getDateString';
import getNextRace from './Services/getNextRace/getNextRace';
import SessionStatus from './components/SessionStatus/SessionStatus';
import getRunners from './Services/getRunners/getRunners';
import ShowRunners from './components/ShowRunners/ShowRunners';

function App() {
  // define application hooks
  const [raceData, setRaceData] = useState(null);
  const [raceString, setRaceString] = useState(getDateString(new Date()));
  const [raceList, setRaceList] = useState(null);
  const [currentRace, setCurrentRace] = useState(0);
  const [currentRaceData, setCurrentRaceData] = useState(null);

  //Initiate initial data load (one time - on page load)
  const loadData = async () => {
    setRaceString(getDateString(new Date()));
    const newRaceMeetings = await getRaceMeetings(raceString);
    const updateRaceList = getRaceList(newRaceMeetings.RaceDay.Meetings);
    setRaceList(updateRaceList);
    const newRaceData = await getRaceData(raceString, newRaceMeetings);
    setRaceData(newRaceData);
  };

  useEffect(() => {
    console.log(`UseEffect enacted! - loadData function called`);
    loadData(raceString);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(`UseEffect enacted! - Change in raceList`);
    setCurrentRace(getNextRace(raceList));
  }, [raceList]);

  // This useEffect is to update currentRace with runner data after all other data loads. This data is then used to populate race specific components/elements with data.
  useEffect(() => {
    console.log(`UseEffect enacted! - Change in RaceData!!`);
    if (raceData !== null && raceList !== null) {
      setCurrentRaceData(getRunners(raceList, currentRace, raceData));
    }
  }, [raceData, raceList, currentRace]);

  return (
    <div className='container'>
      <div className='header'>
        <PageHeader title={'RaceDay'} />
      </div>
      <div className='raceday'>
        <div>
          <RaceSelector
            raceList={raceList}
            currentRace={currentRace}
            setCurrentRace={setCurrentRace}
            getNextRace={getNextRace}
          />
        </div>
        <div>
          <RaceInfo raceList={raceList} currentRace={currentRace} />
        </div>
        <div>
          <SessionStatus />
        </div>
      </div>
      <div className='races'>
        <div>
          <ShowRunners currentRaceData={currentRaceData} />
        </div>
        <div>
          <h2>Dividend Info</h2>
        </div>
        <div>
          <h2>Win/Plc Pools</h2>
        </div>
      </div>
      <div className='results'>
        <div>
          <button onClick={loadData}>Reload Data</button>
        </div>
        <div>Race Results</div>
        <div>Race Status</div>
      </div>
    </div>
  );
}

export default App;
