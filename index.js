require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const { openDB } = require("./src/utils/database");

const collectionRoutes = require("./src/routes/collections");

const init = async () => {
  const app = express();

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  app.use("/collections", collectionRoutes);

  const client = await openDB();
  console.log("COnnected client");

  app.listen(3000);
};

init();
