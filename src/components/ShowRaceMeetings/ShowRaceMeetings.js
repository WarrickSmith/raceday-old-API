const ShowRaceMeetings = ({ raceMeetings, setRaceMeeting }) => {
  const onMeetingChange = (event) => {
    console.log(`A change has been detected! `, event.target.value);
    raceMeetings.Meetings.forEach((meeting, index) => {
      if (event.target.value.toString() === meeting.MeetingId.toString()) {
        console.log(
          `A match has been made: ${event.target.value} Index number: ${index}`
        );
        setRaceMeeting(index);
      }
    });
  };

  return (
    <div className='show-racedays'>
      <label htmlFor='meetings'>Todays Races: </label>

      {raceMeetings && (
        <select id='meetings' name='meetings' onChange={onMeetingChange}>
          {raceMeetings.Meetings.map((meeting) => (
            <option key={meeting.MeetingId} value={meeting.MeetingId}>
              {meeting.VenueName}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default ShowRaceMeetings;
