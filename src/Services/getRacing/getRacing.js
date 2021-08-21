const getRacing = async () => {
  const response = await fetch(
    `https://api.tatts.com/svc/sales/vmax/web/data/racing`
  );
  const newRaceday = await response.json();
  console.log(`newRaceDay is: `, newRaceday);
  console.log(`Return Value is: `, newRaceday.RaceDays[0]);
  return newRaceday.RaceDays[0];
};

export default getRacing;
