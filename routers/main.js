// DEPENDENCIES
const router = require("express").Router();
const userRouter = require("./user.js");
const eventRouter = require("./event.js");

// ROUTES
router.use(userRouter);
router.use(eventRouter);

// EXPORTS
module.exports = router;
