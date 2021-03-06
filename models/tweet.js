// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var tweet = {
  all: function(cb) {
    orm.all("tweets", function(res) {
      cb(res);
    });
  },
  allWhere: function(condition, cb) {
    orm.allWhere("tweets", condition, function(res) {
      cb(res)
    })
  },
  findOne: function(id, cb) {
    orm.findOne("tweets", id, function(res) {
      cb(res)
    })
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("tweets", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("tweets", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("tweets", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (tweetsController.js).
module.exports = tweet;
