import React, { useState, useEffect } from 'react';
import './App.css';

// import racedays from './Data/racedays';
import PageHeader from './components/PageHeader/PageHeader';
import getRaceMeetings from './Services/getRaceMeetings/getRaceMeetings.js';
import getRaceData from './Services/getRaceData/getRaceData';
import getSortedRaces from './Services/getSortedRaces/getSortedRaces';
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

  // Function to do initial raceMeetings and raceData load
  const loadData = async () => {
    setRaceString(getDateString(new Date()));
    const newRaceMeetings = await getRaceMeetings(raceString);
    setRaceMeetings(newRaceMeetings.RaceDay);
  };

  //Initiate initial data load (once - on page load)
  useEffect(() => {
    loadData();
  }, []);
  // Re-render races on change in active race meeting selection
  useEffect(() => {
    if (raceMeetings != null) {
      setRaces(raceMeetings.Meetings[raceMeeting].Races);
      const newRaceData = getRaceData(raceMeetings, raceString);
      setRaceData(newRaceData);
      console.log(`Final raceData Array:`, raceData);
      getSortedRaces(getRaceMeetings);
    }
  }, [raceMeeting, raceMeetings, raceString]);

  return (
    <div className='container'>
      <PageHeader title={'RaceDay'} />
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
