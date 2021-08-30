// Function to display Race Information for the currently selected race. A list of race meetings with races is parsed using currentRaceinfo to match meetingId and raceNumber. If a match is found, subsequent race informtion is then returned in the component.
import './RaceInfo.css';

const RaceInfo = ({ raceList, currentRace }) => {
  console.log(`RaceInfo Element Loading...`);
  console.log(`currentRace: `, currentRace);
  if (raceList == null || currentRace === undefined) {
    return (
      <div>
        <h2>Loading Race Info</h2>
      </div>
    );
  } else console.log(`RaceName: `, raceList[currentRace].RaceName);
  return (
    <div className='show-raceinfo'>
      <div className='show-raceinfo-title'>
        <h2>{raceList[currentRace].RaceName}</h2>
      </div>
      <div className='show-raceinfo-detail'>
        <h3>RACE DISTANCE - {raceList[currentRace].RaceDistance}</h3>
        <h3>RUNNERS - {raceList[currentRace].RaceRunnerCount}</h3>
        <h3>
          WEATHER - {raceList[currentRace].RaceWeatherCondition.toUpperCase()}
        </h3>
        <h3>
          TRACK CONDITION -{' '}
          {raceList[currentRace].RaceTrackCondition.toUpperCase()}
        </h3>
      </div>
    </div>
  );
};
export default RaceInfo;
