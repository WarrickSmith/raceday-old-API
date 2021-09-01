/* This function (Component) takes in an array of current race data with details of one specific race and the runners in that race. It then returns an element with race Runner information */
import './ShowRunners.css';

const ShowRunners = ({ currentRaceData }) => {
  console.log(`ShowRunners Element Loading...`);
  let race = [];

  if (currentRaceData !== null) {
    race = currentRaceData;
    console.log(`Final Race Data returned from getRunners: `, race);
  }

  return (
    <div className='show-runners'>
      <div className='runners'>
        <h2>Runner</h2>
        {currentRaceData && (
          <ol id='runner' name='runner'>
            {race.Runners.map((runner, index) => (
              <li key={index + runner.RunnerName}>
                <div>
                  {runner.RunnerNumber} &nbsp; {runner.RunnerName}
                </div>
                <div className='runner-margin'>
                  {runner.RiderName} ({runner.Barrier})
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
      <div className='dividends'>
        <div>
          <h2>Win</h2>
          {currentRaceData && (
            <ol id='win' name='win'>
              {race.Runners.map((runner, index) => (
                <li key={index + runner.RunnerName}>
                  <div className='div-margin'>{runner.WinOdds}</div>
                  <br />
                </li>
              ))}
            </ol>
          )}
        </div>
        <div>
          <h2>Plc</h2>
          {currentRaceData && (
            <ol id='place' name='place'>
              {race.Runners.map((runner, index) => (
                <li key={index + runner.RunnerName}>
                  <div className='div-margin'>{runner.PlaceOdds}</div>
                  <br />
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowRunners;
