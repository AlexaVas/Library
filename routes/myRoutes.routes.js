/** @format */

const express = require("express");
const router = express.Router();


router.get("/myroute", (req, res, next) => {
  res.send("fghfthtyjtykyuk");
});

router.get("/comments", (req, res, next) => {
  res.send("comments");
});

router.get("/comments/:commentId", (req, res, next) => {
  
  const {commentId} = req.params;
  res.send("number " + commentId);
});

module.exports = router;
