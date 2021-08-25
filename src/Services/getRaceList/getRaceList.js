const getRaceList = (raceMeetings) => {
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
      newObject.RaceTime = new Date(race.RaceTime);
      newRaceList.push(newObject);
    }
  }
  // Sort racelist ascending by RaceTime
  const raceList = newRaceList.sort((a, b) => {
    const c = new Date(a.RaceTime);
    const d = new Date(b.RaceTime);
    return c - d;
  });
  return raceList;
};

export default getRaceList;
