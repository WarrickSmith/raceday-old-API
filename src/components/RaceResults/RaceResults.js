// Function to display Race Result Information for the currently selected race. The function is passed the current race information object (currentRaceData) and (if present/valid) the Result data is extracted and displayed from the object. Result shows the first four places, the runner name and where they drew on the barrier draw. Beside is the final win/place dividend paid.

import './RaceResults.css';
const RaceResults = ({ currentRaceData }) => {
  let isResults = false;
  if (currentRaceData && currentRaceData.hasOwnProperty('Results')) {
    isResults = true;
    console.log(`Race Results detected!`, currentRaceData.Results);
  }
  return (
    <div className='race-results'>
      <div className='race-result'>
        <h2>Result (barrier)</h2>
        {isResults && (
          <ol id='race-result' name='race-result'>
            {currentRaceData.Results.map((result, index) => (
              <li key={index + result.RunnerName}>
                <div>
                  {result.Position} {result.RunnerName} ({result.RunnerNumber})
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
      <div className='result-dividend'>
        <h2>Win &nbsp;&nbsp;/&nbsp;&nbsp; Plc</h2>
        {isResults && (
          <ol id='result-dividend' name='result-dividend'>
            {currentRaceData.Results.map((result, index) => (
              <li key={index + result.RunnerName}>
                <div>
                  $ {result.WinOdds} &nbsp;&nbsp;&nbsp;&nbsp; /
                  &nbsp;&nbsp;&nbsp;&nbsp; $ {result.PlaceOdds}
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

export default RaceResults;
