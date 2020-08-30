const express = require("express");
const router = express.Router();
const axios = require("axios");
const citybikeurl = "http://api.citybik.es/v2/networks/decobike-miami-beach"

router.get("/", (req, res) => {
  res.send({ response: "I am alive, Yes" }).status(200);
});

router.get("/getBikeInfo", async (req, res) => {
  const info = await axios.get(citybikeurl);
  res.send({ response: info.data }).status(200);
});
module.exports = router;