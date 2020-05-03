const express = require("express");
const {
  createCollection,
  getCollection,
} = require("../controllers/collections");
const router = express.Router();

router.get("/", getCollection);
router.post("/", createCollection);

module.exports = router;
