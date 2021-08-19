const ShowRaceDays = ({ racedays }) => {
  console.log(`Rendering html...`);
  // console.log(racedays);
  // console.log(racedays.RaceDays[0].Meetings[0].VenueName);
  return (
    <div className='show-racedays'>
      <label htmlFor='raceday'>Todays Races: </label>
      <select id='raceday' name='raceday'>
        {racedays.RaceDays[0].Meetings.map((raceday) => (
          <option key={raceday.MeetingId} value='raceday.VenueName'>
            {raceday.VenueName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ShowRaceDays;
