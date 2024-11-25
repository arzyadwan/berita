const mysql = require("mysql2");
//konfig koneksi ke db
const dbConfig = {
    host: "34.128.66.235",
    user: "andi",
    password: "Ari421@&!",
    database: "test"
  };
  
  const db = mysql.createConnection(dbConfig);

  db.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL database:", err);
      return;
    }
    console.log("Connected to MySQL database!");
  });


  module.exports = db;