import React, { useState, useEffect } from 'react';
import './App.css';

// import racedays from './Data/racedays';
import PageHeader from './components/PageHeader/PageHeader';
import getRacing from './Services/getRacing/getRacing.js';
import ShowRaceMeetings from './components/ShowRaceMeetings/ShowRaceMeetings';
import ShowRaces from './components/ShowRaces/ShowRaces';
import getDateString from './Services/getDateString/getDateString';

function App() {
  // define application hooks
  const [raceMeetings, setRaceMeetings] = useState(null);
  const [races, setRaces] = useState(null);
  const [raceMeeting, setRaceMeeting] = useState(0);
  const [raceString, setRaceString] = useState(getDateString(new Date()));

  // Function to do initial race meeting data load
  const loadData = async () => {
    setRaceString(getDateString(new Date()));
    const newRaceMeetings = await getRacing(raceString);
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
    }
  }, [raceMeeting, raceMeetings]);

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
