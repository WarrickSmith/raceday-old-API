const getDateString = (raceDate) => {
  const raceString = `/${raceDate.getFullYear()}/${
    raceDate.getMonth() + 1
  }/${raceDate.getDate()}/`;
  return raceString;
};

export default getDateString;
