const express = require("express");
const {
  createCollection,
  getCollections,
} = require("../controllers/collections");
const router = express.Router();

router.get("/", getCollections);
router.post("/", createCollection);

module.exports = router;
