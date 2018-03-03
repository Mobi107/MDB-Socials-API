// DEPENDENCIES
const db = require("../util/db.js");

// REF
const ref = db.refs.userRef;

// METHODS

function getById(id) {
  return db.getById(ref, id);
}

function createByManualId(id, fieldToVal) {
  return db.createByAutoId(ref, id, fieldToVal);
}

// EXPORTS
module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.createByManualId = createByManualId;
