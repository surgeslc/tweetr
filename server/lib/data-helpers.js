"use strict";

// Simulates the kind of delay we see with network or filesystem operations
//const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      db.collection('tweets').insertOne(newTweet, function(err, res) {
        callback(err, res);
        console.log("Record inserted: ", newTweet);

      });
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      db.collection('tweets').find().sort( {created_at: -1}).toArray(function (queryErr, results) {
        if(queryErr) {
          console.log('Query Error', queryErr);
        } else {
          console.log('Query Results', results);
          //return results;
        }
        //db.close();
        callback(queryErr, results);
      });
    }
  };
}