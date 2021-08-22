const ShowRaceMeetings = ({ raceMeetings }) => {
  const onChange = (event) => {
    console.log(`A change has been detected! `, event.target);
  };

  return (
    <div className='show-racedays'>
      <label htmlFor='meetings'>Todays Races: </label>

      {raceMeetings && (
        <select id='meetings' name='meetings' onChange={onChange}>
          {raceMeetings.Meetings.map((meeting) => (
            <option key={meeting.MeetingId} value={meeting.VenueName}>
              {meeting.VenueName}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default ShowRaceMeetings;
