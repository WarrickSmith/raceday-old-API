const ShowRunners = ({ raceList, currentRace, raceData, getRunners }) => {
  console.log(`ShowRunners Element Loading...`);
  let race = [];

  if (raceList !== null && raceData !== null) {
    race = getRunners(raceList, currentRace, raceData);
    console.log(`Final Race Data!!: `, race);
  }

  return (
    <div>
      <div>
        <h2>Runner</h2>
        {raceList && raceData && (
          <ol id='runners' name='runners'>
            {race.Runners.map((runner, index) => (
              <li key={index + runner.RunnerName}>{runner.RunnerName}</li>
            ))}
          </ol>
        )}
      </div>
      <div>
        <br />
        <h2>More Runner Info</h2>
      </div>
    </div>
  );
};

export default ShowRunners;
