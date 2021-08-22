const ShowRaces = ({ races }) => {
  console.log(`Races are: `, races);
  return (
    <div className='show-races'>
      <label htmlFor='races'>Selected Race: </label>

      {races && (
        <select id='races' name='races'>
          {races.map((race, index) => (
            <option key={index + race.RaceName} value={race.RaceName}>
              {race.RaceName}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default ShowRaces;
