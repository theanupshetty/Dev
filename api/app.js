const express = require("express");
const database = require("./config/connection");
const routes = require('./config/routes');

require('dotenv').config();

const app = express();

const port = process.env.SERVER_PORT;

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

database.connect("", "", "admin");

app.use('/', routes);

app.listen(port, () => console.log(`Server started on port ${port}`));