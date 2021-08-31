const getRaceList = (raceMeetings) => {
  /* This function takes the raceMeetings array and parses it for each race in a race meeting to produce an array of races (raceList). This is then sorted in acending order by race start time(RaceTime) and the raceList is returned for use with the RaceSelector component */

  // Function below to read Australian date/time and convert to NZ time for storing in raceList array. hard coded to 2hrs difference. Will need to pdtae to use a better date/time conversion library.

  const nswTime = (time) => {
    let utc_Offset = time.getTimezoneOffset();
    time.setMinutes(time.getMinutes() + utc_Offset);
    let nsw_Offset = 14 * 60;
    time.setMinutes(time.getMinutes() + nsw_Offset);
    return time;
  };

  console.log(`getRaceList Function Executing....`, raceMeetings);
  let newRaceList = [];
  for (const meeting of raceMeetings) {
    const races = meeting.Races;
    for (const race of races) {
      let newObject = {};
      newObject.MeetingCode = meeting.MeetingCode;
      newObject.MeetingId = meeting.MeetingId;
      newObject.VenueName = meeting.VenueName;
      newObject.MeetingType = meeting.MeetingType;
      newObject.RaceNumber = race.RaceNumber;
      newObject.RaceName = race.RaceName;
      newObject.RaceStatus = race.Status;
      newObject.RaceDistance = race.Distance;
      race.hasOwnProperty('WeatherCondition')
        ? (newObject.RaceWeatherCondition = race.WeatherCondition)
        : (newObject.RaceWeatherCondition = 'Not Reported');
      race.hasOwnProperty('TrackCondition')
        ? (newObject.RaceTrackCondition = race.TrackCondition)
        : (newObject.RaceTrackCondition = 'Not Reported');
      newObject.RaceTime = nswTime(new Date(race.RaceTime));
      newRaceList.push(newObject);
    }
  }
  // Sort racelist ascending by RaceTime
  const raceList = newRaceList.sort((a, b) => {
    const c = new Date(a.RaceTime);
    const d = new Date(b.RaceTime);
    return c - d;
  });
  console.log(`RaceList: `, raceList);
  return raceList;
};

export default getRaceList;
