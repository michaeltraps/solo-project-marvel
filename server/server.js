const path = require('path');
const express = require('express');
const app = express();
const apiRouter = require('./api');
const PORT = 3000;
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', apiRouter);

app.use((req, res) => res.status(404).send(`This page has been dusted in the Snap...`));

app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error.',
        status: 500,
        message: { err: 'An error occurred'},
    };
    const errorObj = Object.assign({}, defaultErr, err);
    return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });

  module.exports = app;