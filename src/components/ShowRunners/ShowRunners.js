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
