const getRaceMeetings = async (raceString) => {
  const response = await fetch(
    `https://api.tatts.com/svc/sales/vmax/web/data/racing${raceString}`
  );
  const newRaceday = await response.json();
  console.log(`RaceDay Data Fetched: `, newRaceday);
  return newRaceday;
};

export default getRaceMeetings;
