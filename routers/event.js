// DEPENDENCIES
const router = require("express").Router();
const completeRequest = require("../util/routing.js").completeRequest;
const eventLogic = require("../logic/event.js");
const userRef = require("../logic/user.js").ref;

// ROUTES
router.get("/Events", function(req, res) {
  completeRequest(req, res, eventLogic.getAll);
});

router.get("/Events/:id", function(req, res) {
  req.checkParams("id", "no id present").notEmpty();
  req.checkParams("id", "event id does not exist").isValidId(eventLogic.ref);
  completeRequest(req, res, function(params) {
    console.log(params.id)
    return eventLogic.getById(params.id);
  });
});

router.post("/Events/", function(req, res) {
  console.log("Making a new post!");
  req.checkBody("date", "no fullname present").notEmpty();
  req.checkBody("description", "no email present").notEmpty();
  req.checkBody("interestedUserIds", "no userID present").notEmpty();
  req.checkBody("imageURL", "no username present").notEmpty();
  req.checkBody("creater", "no username present").notEmpty();
  req.checkBody("createrId", "no username present").notEmpty();
  completeRequest(req, res, function(params) {
    console.log(params)
    return eventLogic.createByAutoId(params)
  });
});

// EXPORTS
module.exports = router;
