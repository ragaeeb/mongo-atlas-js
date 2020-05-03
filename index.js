require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const { openDB } = require("./src/utils/database");
const Collection = require("./src/models/Collection");

const init = async () => {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));

  const client = await openDB();
  console.log("COnnected client");

  const newCollection = new Collection("Sahih", "Sahīh", "al-Bukhari");
  newCollection.save();
};

init();
