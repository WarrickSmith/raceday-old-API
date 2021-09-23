const getNextRace = (raceList) => {
  if (raceList != null) {
    let dateNow = new Date();
    for (const [index, race] of raceList.entries()) {
      if (race.RaceTime > dateNow) {
        return index;
      }
    }
  }
};

export default getNextRace;
