const getRaceData = async (raceString, newRaceMeetings) => {
  // Function to fetch a full meeting including, races and runner information including win/place odds and racepools. This is pushed to an array (raceData) and returned. This in turned is used by another function (getRaceList) to build a list of races for the RaceSelector component.
  const raceData = [];

  // Iterate meeting and determine meeting code, assign code to string for fetching a specific meeting.
  try {
    for (const meeting of newRaceMeetings.RaceDay.Meetings) {
      // Fetch meeting using code, push result to newRaceData array

      const meetingCode = meeting.MeetingCode;
      const response = await fetch(
        `https://api.tatts.com/svc/sales/vmax/web/data/racing${raceString}/${meetingCode}`
      );
      const newRacedata = await response.json();
      raceData.push(newRacedata.RaceDay.Meetings[0]);
    }
    console.log(`raceData Fetched - Includes Runners Data`, raceData);
    return raceData;
  } catch (error) {
    alert(
      `There has been a problem fetching detailed Race Meeting data (getRaceData):
    
Please re-load the web page.`,
      error
    );
    return;
  }
};

export default getRaceData;
