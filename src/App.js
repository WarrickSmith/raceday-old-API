import React, { useState, useEffect } from 'react';
import './App.css';

// import racedays from './Data/racedays';
import PageHeader from './components/PageHeader/PageHeader';
import RaceSelector from './components/RaceSelector/RaceSelector';
import getRaceMeetings from './Services/getRaceMeetings/getRaceMeetings.js';
import getRaceData from './Services/getRaceData/getRaceData';
import getRaceList from './Services/getRaceList/getRaceList';
import ShowRaceMeetings from './components/ShowRaceMeetings/ShowRaceMeetings';
import ShowRaces from './components/ShowRaces/ShowRaces';
import getDateString from './Services/getDateString/getDateString';
import getNextRace from './Services/getNextRace/getNextRace';

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
  useEffect(() => {
    console.log(`UseEffect enacted! - loadData function called`);
    setRaceString(getDateString(new Date()));
    const loadData = async () => {
      const newRaceMeetings = await getRaceMeetings(raceString);
      setRaceMeetings(newRaceMeetings.RaceDay);
      const updateRaceList = getRaceList(newRaceMeetings.RaceDay.Meetings);
      setRaceList(updateRaceList);
      const newRaceData = await getRaceData(raceString, newRaceMeetings);
      setRaceData(newRaceData);
    };
    loadData();
  }, [raceString]);

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
      <PageHeader title={'RaceDay'} />
      <RaceSelector
        raceList={raceList}
        currentRace={currentRace}
        setCurrentRace={setCurrentRace}
        getNextRace={getNextRace}
      />
      <ShowRaceMeetings
        raceMeetings={raceMeetings}
        setRaceMeeting={setRaceMeeting}
      />
      <ShowRaces races={races} />
    </div>
  );
}

export default App;
