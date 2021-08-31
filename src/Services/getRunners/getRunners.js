const getRunners = (raceList, currentRace, raceData) => {
  let raceMatch = [];
  console.log(`raceList detected... Fetching Runners...`);
  for (const meeting of raceData) {
    if (meeting.MeetingId === raceList[currentRace].MeetingId) {
      raceMatch = meeting.Races[raceList[currentRace].RaceNumber - 1];
      return raceMatch;
    }
  }
};

export default getRunners;
