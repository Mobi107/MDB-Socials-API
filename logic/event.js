// DEPENDENCIES
const db = require("../util/db.js");
const fcm = require("../util/fcm.js");

// REF
const ref = db.refs.eventsRef;
const topic = "new-event";
const newEventMsg = "A new event has been added";

// METHODS
function getAll() {
  return db.getAll(ref);
}

function getById(id) {
  return db.getById(ref, id);
}

function createByAutoId(fieldToVal) {
  return db.createByAutoId(ref, {
    imageUrl: fieldToVal.imageUrl,
    createrId: fieldToVal.createrId
  });
}

function notifyNewEvent() {
  db.listenForChanges(ref, function(event) {
    fcm.sendNotification(topic, newEventMsg);
  });
}

// EXPORTS
module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.createByAutoId = createByAutoId;
module.exports.notifyNewEvent = notifyNewEvent;
module.exports.ref = ref;
