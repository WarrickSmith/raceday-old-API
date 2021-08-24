const getRaceData = async (raceMeetings, raceString) => {
  if (raceMeetings != null) {
    const newRaceData = [];
    console.log(`Objects passed to getRaceData: `, raceMeetings, raceString);
    for (const index in raceMeetings.Meetings) {
      const meetingCode = raceMeetings.Meetings[index].MeetingCode;
      const response = await fetch(
        `https://api.tatts.com/svc/sales/vmax/web/data/racing${raceString}/${meetingCode}`
      );
      newRaceData.push(await response.json());
      console.log(`getraceData frunction return:`, newRaceData);

      return newRaceData;
    }
  }
};

export default getRaceData;
