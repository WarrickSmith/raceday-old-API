// Create Server to'listen' for request enpoints that will be handled by 'app.js'

const app = require("./app");
const port = 5000;

app.listen(port, () =>
  console.log(`RaceDay server listening on port ${port}!`)
);
