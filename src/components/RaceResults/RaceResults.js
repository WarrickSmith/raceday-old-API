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
        <h2>Result (runner number)</h2>
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
        <div>
          <h2>Win</h2>
          {isResults && (
            <ol id='result-winDividend' name='result-winDividend'>
              {currentRaceData.Results.map((result, index) => (
                <li className='li-margin' key={index + result.RunnerName}>
                  <div>$ {result.WinOdds}</div>
                </li>
              ))}
            </ol>
          )}
        </div>
        <div>
          <h2>Plc</h2>
          {isResults && (
            <ol id='result-plcDividend' name='result-plcDividend'>
              {currentRaceData.Results.map((result, index) => (
                <li className='li-margin' key={index + result.RunnerName}>
                  <div>$ {result.PlaceOdds}</div>
                </li>
              ))}
            </ol>
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default RaceResults;
