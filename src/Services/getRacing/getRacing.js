const getRacing = async () => {
  const response = await fetch(
    `https://api.tatts.com/svc/sales/vmax/web/data/racing`
  );
  const newRaceday = await response.json();
  return newRaceday.RaceDays[0];
};

export default getRacing;
