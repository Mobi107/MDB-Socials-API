// DEPENDENCIES
const router = require("express").Router();
const memeLogic = require("../logic/meme.js");

// ROUTES
router.get("/memes", function(req, res) {
  memeLogic.getAll().then(function(memes) {
    res.status(200).json(memes);
  }).catch(function(error) {
    res.status(500).send("Oops something went wrong")
  });
});

router.get("/memes/:id", function(req, res) {
  req.checkParams("id", "no id present").notEmpty();
  memeLogic.getById(req.params.id).then(function(meme) {
    res.status(200).json(meme);
  }).catch(function(error) {
    res.status(500).send("Oops something went wrong")
  });
});

router.post("/memes", function(req, res) {
  memeLogic.createByAutoId(req.body).then(function(meme) {
    res.status(200).json(meme);
  }).catch(function(error) {
    res.status(500).send("Oops something went wrong")
  });
});

// EXPORTS
module.exports = router;
