// Function to display Race Information for the currently selected race. A list of race meetings with races is parsed using currentRaceinfo to match meetingId and raceNumber. If a match is found, subsequent race informtion is then returned in the component.
const RaceInfo = ({ raceList, currentRace }) => {
  console.log(`RaceInfo Element Loading...`);
  console.log(`currentRace: `, currentRace);
  if (raceList == null || !currentRace) {
    return (
      <div>
        <h2>Loading Race Info</h2>
      </div>
    );
  } else
    return (
      <div className='show-raceinfo'>
        <h2>{raceList[currentRace].RaceName}</h2>
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
    );
};
export default RaceInfo;
