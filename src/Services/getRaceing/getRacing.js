const getRacing = async () => {
  const newRaceday = await fetch(
    `https://api.tatts.com/svc/sales/vmax/web/data/racing`
  );
  return newRaceday;
};

export default getRacing;
