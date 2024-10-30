//get the client
import mysql from "mysql2";

//create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Consistency1050!",
  database: "nodejsbasic",
});

/* //simple query
connection.query("SELECT * FROM `users`", function (err, results, fields) {
  console.log(">>>check mysql");
  console.log(results); //results contain row returned by server
  //   console.log(fields); //fields contain extra meta data about result
});
 */
export default connection;
