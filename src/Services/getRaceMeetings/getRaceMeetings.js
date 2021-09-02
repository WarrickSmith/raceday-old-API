// Function to fetch a racedays full meeting, race and runner information including win/place odds and racepools.
const getRaceMeetings = async (raceString) => {
  try {
    const response = await fetch(
      `https://api.tatts.com/svc/sales/vmax/web/data/racing${raceString}`
    );
    const newRaceday = await response.json();
    console.log(`RaceDay Meetings Fetched: `, newRaceday);
    return newRaceday;
  } catch (error) {
    alert(
      `There has been a problem fetching Race Meetings (getRaceMeetings):
      
Please re-load the web page.`,
      error
    );
    return;
  }
};

export default getRaceMeetings;
