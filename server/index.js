const express = require('express');
const morgan = require('morgan');

const PORT = 8000;

const app = express();

app.use(morgan("tiny"));
app.use(express.json());

app.use(require("./handlers/email"));

const server = app.listen(PORT, () => {
    console.log("🌍 Listening on port " + server.address().port);
});