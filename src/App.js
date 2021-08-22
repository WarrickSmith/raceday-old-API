import React, { useState, useEffect } from 'react';
import './App.css';

// import racedays from './Data/racedays';
import PageHeader from './components/PageHeader/PageHeader';
import getRacing from './Services/getRacing/getRacing.js';
import ShowRaceMeetings from './components/ShowRaceMeetings/ShowRaceMeetings';
import ShowRaces from './components/ShowRaces/ShowRaces';

function App() {
  // define application hooks
  const [raceMeetings, setRaceMeetings] = useState(null);
  const [races, setRaces] = useState(null);
  const [currentMeeting, setCurrentMeeting] = useState(0);

  const loadData = async () => {
    const newRaceMeetings = await getRacing();
    setRaceMeetings(newRaceMeetings);
    console.log(`newRaceMeetings: `, newRaceMeetings);
    setRaces(newRaceMeetings.Meetings[currentMeeting].Races);
    console.log(`Races: `, newRaceMeetings.Meetings[currentMeeting].Races);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className='container'>
      <PageHeader title={'RaceDay'} />
      <ShowRaceMeetings raceMeetings={raceMeetings} />
      <ShowRaces races={races} />
      <button onClick={loadData}>Get Race data</button>
    </div>
  );
}

export default App;
