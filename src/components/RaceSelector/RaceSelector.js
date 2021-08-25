import React from 'react';

const RaceSelector = ({ raceList }) => {
  console.log(`RaceSelector Element Loading...`, raceList, ` Current Race: `);
  // Function to determine next race (index) based on current time
  const getNextRace = (raceList) => {
    let dateNow = new Date();
    for (const [index, race] of raceList.entries()) {
      if (race.RaceTime > dateNow) {
        return index;
      }
    }
  };
  let currentRace = 0;
  if (raceList != null) {
    currentRace = getNextRace(raceList);
    console.log(
      `RaceSelector Data Detected!!...`,
      raceList,
      ` currentRace: `,
      currentRace
    );
  }

  return (
    <div className='raceselector'>
      {raceList && (
        <select id='raceList' name='raceList' defaultValue={currentRace}>
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
        <button>NEXT SCHEDULED RACE</button>
        <button>+</button>
      </div>
    </div>
  );
};
export default RaceSelector;
