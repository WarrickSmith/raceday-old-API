import React, { useState, useEffect } from 'react';
import './App.css';

// import racedays from './Data/racedays';
import PageHeader from './components/PageHeader/PageHeader';
import RaceSelector from './components/RaceSelector/RaceSelector';
import getRaceMeetings from './Services/getRaceMeetings/getRaceMeetings.js';
import getRaceData from './Services/getRaceData/getRaceData';
import getRaceList from './Services/getRaceList/getRaceList';
import RaceInfo from './components/RaceInfo/RaceInfo';
import ShowRaceMeetings from './components/ShowRaceMeetings/ShowRaceMeetings';
import ShowRaces from './components/ShowRaces/ShowRaces';
import getDateString from './Services/getDateString/getDateString';
import getNextRace from './Services/getNextRace/getNextRace';
import SessionStatus from './components/SessionStatus/SessionStatus';
import getRunners from './Services/getRunners/getRunners';
import ShowRunners from './components/ShowRunners/ShowRunners';

function App() {
  // define application hooks
  const [raceMeetings, setRaceMeetings] = useState(null);
  const [raceData, setRaceData] = useState(null);
  const [races, setRaces] = useState(null);
  const [raceMeeting, setRaceMeeting] = useState(0);
  const [raceString, setRaceString] = useState(getDateString(new Date()));
  const [raceList, setRaceList] = useState(null);
  const [currentRace, setCurrentRace] = useState(0);

  //Initiate initial data load (once - on page load)
  const loadData = async () => {
    setRaceString(getDateString(new Date()));
    const newRaceMeetings = await getRaceMeetings(raceString);
    setRaceMeetings(newRaceMeetings.RaceDay);
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
    if (raceMeetings != null) {
      console.log(`UseEffect enacted! - Change in raceMeetings or raceMeeting`);
      setRaces(raceMeetings.Meetings[raceMeeting].Races);
    }
  }, [raceMeeting, raceMeetings]);

  useEffect(() => {
    console.log(`UseEffect enacted! - Change in raceList`);
    setCurrentRace(getNextRace(raceList));
  }, [raceList]);

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
          <ShowRunners
            raceList={raceList}
            currentRace={currentRace}
            raceData={raceData}
            getRunners={getRunners}
          />
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
        <div>
          Race Results
          <ShowRaceMeetings
            raceMeetings={raceMeetings}
            setRaceMeeting={setRaceMeeting}
          />
        </div>
        <div>Race Status</div>
        <ShowRaces races={races} />
      </div>
    </div>
  );
}

export default App;
