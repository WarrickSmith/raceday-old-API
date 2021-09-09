/* This function takes the raceList indexed by currentRace to match with a corresponding meeting(MeetingID) from raceData to then locate an array of races in the meeting and then the race number based on currentRace. The resulting race information, runners, pools etc is returned as an object to the ShowRunners component. */

const getRunners = (raceList, currentRace, raceData) => {
  console.log(
    `**** getRunners Function Called... Fetching Runners for Current Race:`,
    currentRace,
    raceList,
    raceData
  );
  // raceNumber is the number of the race at the meeting, ie, Race '3' @ Randwick
  const raceNumber = raceList[currentRace].RaceNumber;

  for (const meeting of raceData) {
    if (meeting.MeetingId === raceList[currentRace].MeetingId) {
      for (const raceMatch of meeting.Races) {
        if (raceMatch.RaceNumber === raceNumber) {
          return raceMatch;
        }
      }
    }
  }
};

export default getRunners;
