import { race } from 'q';
import React from 'react';
const RaceSelector = ({ raceList }) => {
  console.log(`RaceSelector Element Loading...`, raceList);
  return (
    <div className='raceselector'>
      {raceList && (
        <select id='raceList' name='raceList'>
          {raceList.map((race, index) => (
            <option key={race.MeetingId + race.RaceNumber} value={index}>
              {`${race.RaceTime} - #${race.RaceNumber} @ ${race.VenueName} (${race.MeetingType})`}
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
