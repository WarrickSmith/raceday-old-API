/* This function (Component) takes in an array of current race data with details of one specific race and the runners in that race. It then returns an element with race Runner information */

const ShowRunners = ({ currentRaceData }) => {
  console.log(`ShowRunners Element Loading...`);
  let race = [];

  if (currentRaceData !== null) {
    race = currentRaceData;
    console.log(`Final Race Data!!: `, race);
  }

  return (
    <div>
      <div>
        <h2>Runner</h2>
        {currentRaceData && (
          <ol id='runners' name='runners'>
            {race.Runners.map((runner, index) => (
              <li key={index + runner.RunnerName}>
                <div>
                  {runner.RunnerNumber} {runner.RunnerName}
                </div>
                <div>
                  {runner.RiderName} ({runner.Barrier})
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
      <div>
        <br />
        <h2>Win/Plc</h2>
        {currentRaceData && (
          <ol id='runners' name='runners'>
            {race.Runners.map((runner, index) => (
              <li key={index + runner.RunnerName}>
                <div>{runner.WinOdss}</div>
                <div>{runner.PlaceOdds}</div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

export default ShowRunners;
