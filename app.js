const express = require('express'); // To create an express server
const chalk = require('chalk'); // Prints log in colors
const debug = require('debug')('app'); // Prints to console only when DEBUG mode is ON
const morgan = require('morgan'); // Shows the details from where request has occured
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/'))); // create static directory with static files

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(port, () => {
  debug(chalk.green(`listening on port ${port}`));
});
