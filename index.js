require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const { openDB } = require("./src/utils/database");

const collectionRoutes = require("./src/routes/collections");
const userRoutes = require("./src/routes/users");
const { getUser } = require("./src/controllers/users");

const init = async () => {
  const app = express();

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  app.use(getUser);

  app.use("/collections", collectionRoutes);
  app.use("/users", userRoutes);

  const client = await openDB();
  console.log("Connected to database");

  app.listen(3000);
};

init();
