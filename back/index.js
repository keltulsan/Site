const express = require("express");
const app = express();
const port = 4444;
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('eko', 'root', 'root', {
  host: 'localhost',
  dialect:'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});
