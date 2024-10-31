import connection from '../configs/connectDB';
let getHomepage = (req, res) => {
  let data = [];
  connection.query(
    'SELECT * FROM `users`',
    function (err, results, fields) {
      results.map((row) => {
        data.push({
          ID: row.ID,
          firstName: row.firstName,
          lastName: row.lastName,
          email: row.email,
          address: row.address
        })
      });
      return res.render('index.ejs', { dataUser: data })
    })
}
module.exports = {
  getHomepage,
}