// DEPENDENCIES
const router = require("express").Router();
const userLogic = require("../logic/user.js");

// ROUTES
router.get("/users/:id", function(req, res) {
  req.checkParams("id", "no id present").notEmpty();
  userLogic.getById(req.params.id).then(function(user) {
    res.status(200).json(user);
  }).catch(function(error) {
    res.status(500).send("Oops something went wrong")
  });
});

router.post("/users/:id", function(req, res) {
  userLogic.craeteByManualId(req.).then(function(meme) {
    res.status(200).json(meme);
  }).catch(function(error) {
    res.status(500).send("Oops something went wrong")
  });
});

// EXPORTS
module.exports = router;
