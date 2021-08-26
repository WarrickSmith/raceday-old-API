import React from 'react';
const RaceSelector = ({
  raceList,
  currentRace,
  setCurrentRace,
  getNextRace,
}) => {
  /* This function takes in a list of races sorted by race start time,
  a value of the current active race, a function call to update the current race
  and a function to return the race number of the next scheduled race. 
  The RaceSelector element populates a selectable list of races with the first race as the default. Clicking on 'Next Scheduled Race' invokes the getNextRace onClick event handler and resulting race index value is passed to setCurrentRace to update the currentRace state. If a race is selected from the the list of races dropdown, then the onChange event handler is envoked to update the currentRace by passing the seleced race target value to setCurrentRace. */

  console.log(`RaceSelector Element Loading...`);
  const handleOnChange = (event) => {
    console.log(`A change has been detected!`);
    setCurrentRace(event.target.value);
  };
  const handleOnClick = () => {
    console.log(`A change has been detected!`);
    setCurrentRace(getNextRace(raceList));
  };

  console.log(
    `Current Active Race: `,
    currentRace,
    `  |   Next Schedlued Race: `,
    getNextRace(raceList)
  );

  return (
    <div className='raceselector'>
      <p>Current Race is: {currentRace}</p>
      {raceList && (
        <select
          id='raceList'
          name='raceList'
          value={currentRace}
          onChange={handleOnChange}
        >
          {raceList.map((race, index) => (
            <option key={race.MeetingId + race.RaceNumber} value={index}>
              {`${race.RaceTime.toLocaleTimeString()} - Race ${
                race.RaceNumber
              } @ ${race.VenueName} (${race.MeetingType})`}
            </option>
          ))}
        </select>
      )}

      <div>
        <button>-</button>
        <button onClick={handleOnClick}>NEXT SCHEDULED RACE</button>
        <button>+</button>
      </div>
    </div>
  );
};
export default RaceSelector;
