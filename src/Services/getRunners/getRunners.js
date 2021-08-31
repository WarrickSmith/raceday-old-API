/* This function takes the raceList indexed by currentRace to match with a corresponding meeting(MeetingID) from raceData to then locate an array of races in the meeting and then the race number based on currentRace. The resulting race information, runners, pools etc is returned as an object to the ShowRunners component. */

const getRunners = (raceList, currentRace, raceData) => {
  let raceMatch = [];
  console.log(
    `**** getRunners Function Called... Fetching Runners for Current Race:`,
    currentRace
  );
  for (const meeting of raceData) {
    if (meeting.MeetingId === raceList[currentRace].MeetingId) {
      raceMatch = meeting.Races[raceList[currentRace].RaceNumber - 1];
      return raceMatch;
    }
  }
};

export default getRunners;
