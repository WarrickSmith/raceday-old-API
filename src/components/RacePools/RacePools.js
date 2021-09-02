// Function to display Race Pool Information for the currently selected race. The function is passed the current race information object (currentRaceData) and the Pools data is extracted and displayed from the object. Pools are: Win, Place, Quinella, Trifecta, First Four, Duet and Exacta,

import './RacePools.css';

const RacePools = ({ currentRaceData }) => {
  let poolArray = [];

  if (currentRaceData) {
    for (const pool of currentRaceData.Pools) {
      let poolName = '';
      switch (pool.PoolType) {
        case 'WW':
          poolName = 'Win';
          break;
        case 'PP':
          poolName = 'Place';
          break;
        case 'QN':
          poolName = 'Quinella';
          break;
        case 'TF':
          poolName = 'Trifexta';
          break;
        case 'F4':
          poolName = 'First Four';
          break;
        case 'A2':
          poolName = 'Duet';
          break;
        case 'EX':
          poolName = 'Exacta';
          break;
        default:
          poolName = 'Error!';
      }
      let object = { PoolName: poolName, Total: pool.PoolTotal };
      poolArray = [...poolArray, object];
    }
  }
  poolArray.map((pool) => console.log(pool));

  console.log(`RacePools: `, currentRaceData);
  return (
    <div className='race-pools'>
      <div className='pool'>
        <h2>Race Pools</h2>
        <ol id='poolname' name='poolname'>
          {poolArray.map((pool, index) => (
            <li key={index + pool.PoolName}>
              <div>{pool.PoolName}</div>
            </li>
          ))}
        </ol>
      </div>
      <div className='pool-total'>
        <h2>QLD</h2>
        {currentRaceData && (
          <ol id='pooltotal' name='pooltotal'>
            {poolArray.map((pool, index) => (
              <li key={index + pool.PoolName}>
                <div>$ {pool.Total}</div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

export default RacePools;
