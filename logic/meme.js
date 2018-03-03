// DEPENDENCIES
const db = require("../util/db.js");

// REF
const ref = db.refs.memeRef;

// METHODS
function getAll() {
  return db.getAll(ref);
}

function getById(id) {
  return db.getById(ref, id);
}

function createByAutoId(fieldToVal) {
  return db.createByAutoId(ref, fieldToVal);
}

// EXPORTS
module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.createByAutoId = createByAutoId;
