const express = require("express");
const app = express();
const port = 4444;
const bodyParser = require('body-parser');
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

var initModels = require("./models/init-models");
var models = initModels(sequelize);
(async () => {
    await sequelize.sync();
    // Code here
    const jane = await models.labels.create({label_name:"Pitié marche"});
    console.log("Jane's auto-generated ID:", jane.id);
    // const jane1 = await models.labels.create({label_name:"Pitié marche"});
    // console.log("Jane's auto-generated ID:", jane1.id);
  })();

  app.get("/pokemon/list", function (req, res) {
    //on se connecte à la DB MongoDB
    (async () => {
      await sequelize.sync();
      // Code here
      const jane1 = await models.labels.findAll({});
      // const jane1 = await models.labels.create({label_name:"Pitié marche"});
      // console.log("Jane's auto-generated ID:", jane1.id);
      res.send(jane1)
    })();
    //premier test permettant de récupérer mes pokemons !
    });
  
  app.use(bodyParser.urlencoded({ extended: true })); 
  const jsonParser = bodyParser.json();
  app.post("/marcheforpity",jsonParser,(req,res) =>{
    (async () => {
      await sequelize.sync();
      // Code here
      const body = await models.labels.create({label_name:req.body.label_name});
      // console.log("Jane's auto-generated ID:", jane1.id);
      res.json(body)
    })();
  });