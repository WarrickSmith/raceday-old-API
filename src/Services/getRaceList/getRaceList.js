const getRaceList = (raceMeetings) => {
  console.log(`getRaceList Function Executing....`, raceMeetings);
  const raceList = [];
  for (const meeting of raceMeetings) {
    const races = meeting.Races;
    for (const race of races) {
      let newObject = {};
      newObject.MeetingCode = meeting.MeetingCode;
      newObject.MeetingId = meeting.MeetingId;
      newObject.VenueName = meeting.VenueName;
      newObject.MeetingType = meeting.MeetingType;
      newObject.RaceNumber = race.RaceNumber;
      newObject.RaceTime = race.RaceTime;
      raceList.push(newObject);
    }
  }

  console.log(`The RaceList is: `, raceList);
  return raceList;
};

export default getRaceList;
