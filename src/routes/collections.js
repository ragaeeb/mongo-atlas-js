const express = require("express");
const {
  createCollection,
  getCollection,
  getCollections,
} = require("../controllers/collections");
const router = express.Router();

router.get("/", getCollections);

// order matters, this needs to come after the / GET
router.get("/:id", getCollection);
router.post("/", createCollection);

module.exports = router;
