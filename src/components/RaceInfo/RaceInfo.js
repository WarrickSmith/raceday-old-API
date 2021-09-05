// Function to display Race Information for the currently selected race. A list of race meetings with races is parsed using currentRaceinfo to match meetingId and raceNumber. If a match is found, subsequent race informtion is then returned in the component.
import './RaceInfo.css';

const RaceInfo = ({ raceList, currentRace, currentRaceData }) => {
  console.log(`RaceInfo Element Loading...`);
  if (currentRaceData == null || currentRaceData === undefined) {
    return (
      <div className='show-raceinfo'>
        <h2 className='show-raceinfo-title'>Loading Race Info...</h2>
      </div>
    );
  } else console.log(`RaceName: `, currentRaceData.RaceName);
  return (
    <div className='show-raceinfo'>
      <div className='show-raceinfo-title'>
        <h2>{currentRaceData.RaceName}</h2>
      </div>
      <div className='show-raceinfo-detail'>
        <h3>RACE DISTANCE - {currentRaceData.Distance}</h3>
        <h3>STATUS - {currentRaceData.Status}</h3>
        <h3>WEATHER - {currentRaceData.WeatherCondition.toUpperCase()}</h3>
        <h3>
          TRACK CONDITION - {currentRaceData.TrackCondition.toUpperCase()}
        </h3>
      </div>
    </div>
  );
};
export default RaceInfo;
