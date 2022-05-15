var searcWord = async function (req, res) {
  var express = require("express");
  var app = express();  
  const mysql = require("mysql");
  // local
  // const connection = mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   password: "12345678",
  //   database: "entries",
  // });

  // remote heroku mysql
  const connection = mysql.createConnection({    
    host: "us-cdbr-east-05.cleardb.net",
    user: "b8d26fafadf1e3",
    password: "9b437436",
    database: "heroku_1093db72dd46d72",
  });

  connection.connect();

  connection.query(
    //"SELECT * FROM entries.entries where word = '" + req.body.term+"'",  //local
    "SELECT * FROM heroku_1093db72dd46d72.entries where word = '" +
    req.query.term +
      "'", //reome heroku mysql
    (err, rows, fields) => {
      if (err) throw err;
      res.json(Object.values(JSON.parse(JSON.stringify(rows))));
    }
  );

  connection.end(req, res);
};

module.exports = searcWord;
