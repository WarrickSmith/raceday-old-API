const getRaceData = async (raceString, newRaceMeetings) => {
  // Iterate meeting and determine meeting code, assign code to string
  let raceData = [];
  for (const meeting of newRaceMeetings.RaceDay.Meetings) {
    // Fetch meeting using code, push result to newRaceData array

    let meetingCode = meeting.MeetingCode;
    const response = await fetch(
      `https://api.tatts.com/svc/sales/vmax/web/data/racing${raceString}/${meetingCode}`
    );
    let newRacedata = await response.json();
    raceData.push(newRacedata.RaceDay.Meetings[0]);
  }
  console.log(`raceData Fetched`, raceData);
  return raceData;
};

export default getRaceData;
