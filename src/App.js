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

function App() {
  // define application hooks
  const [raceMeetings, setRaceMeetings] = useState(null);
  const [raceData, setRaceData] = useState(null);
  const [races, setRaces] = useState(null);
  const [raceMeeting, setRaceMeeting] = useState(0);
  const [raceString, setRaceString] = useState(getDateString(new Date()));
  const [raceList, setRaceList] = useState(null);

  // Function to do initial raceMeetings and raceData load
  const loadData = async () => {
    setRaceString(getDateString(new Date()));
    const newRaceMeetings = await getRaceMeetings(raceString);
    setRaceMeetings(newRaceMeetings.RaceDay);
    const newRaceList = getRaceList(newRaceMeetings.RaceDay.Meetings);
    setRaceList(newRaceList);
    const newRaceData = await getRaceData(raceString, newRaceMeetings);
    setRaceData(newRaceData);
  };

  //Initiate initial data load (once - on page load)
  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (raceMeetings != null) {
      setRaces(raceMeetings.Meetings[raceMeeting].Races);
    }
  }, [raceMeeting, raceMeetings]);

  return (
    <div className='container'>
      <PageHeader title={'RaceDay'} />
      <RaceSelector raceList={raceList} />
      <ShowRaceMeetings
        raceMeetings={raceMeetings}
        setRaceMeeting={setRaceMeeting}
      />
      <ShowRaces races={races} />
      <button onClick={loadData}>Re-Load Race Data</button>
    </div>
  );
}

export default App;
