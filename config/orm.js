// make connection to connection.js
var connection = require('./connection.js');

var orm = {
  newLocation: function(tableInput, nameInput, cb) { 
    var s = "INSERT INTO " + tableInput + " (WHATS_AROUND) VALUES (?)";
    connection.query(s, [nameInput], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },