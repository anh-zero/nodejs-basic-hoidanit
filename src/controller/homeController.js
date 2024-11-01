import pool from '../configs/connectDB';

let getHomepage = async (req, res) => {
  let data = [];
  const [rows, fields] = await pool.execute('SELECT * FROM users');
  return res.render('index.ejs', { dataUser: rows });
}

let getDetailPage = async (req, res) => {
  let userID = req.params.userID;
  if (!userID) {
    return res.status(400).send('User ID is required');
  }
  let [user] = await pool.execute('SELECT * FROM users WHERE ID = ?', [userID]);
  return res.send(JSON.stringify(user));
}

let createNewUser = async (req, res) => {
  let { firstName, lastName, email, address } = req.body;

  await pool.execute('insert into users(firstName, lastName, email, address) values (?, ?, ?, ?)',
    [firstName, lastName, email, address]);

  return res.redirect('/')
}

let deleteUser = async (req, res) => {
    let userId = req.body.userId;
    await pool.execute('delete from users where ID = ?', [userId])
    return res.redirect('/');
}

let getEditPage = async (req, res) => {
    let id = req.params.userID;
    let [user] = await pool.execute('select * from users where ID = ?', [id]);
    // return res.send(JSON.stringify(user))
    return res.render('update.ejs', { dataUser: user[0] }); // x <- y
}

let postUpdateUser = async (req, res) => {
    let { firstName, lastName, email, address, userID } = req.body;

    await pool.execute('update users set firstName= ?, lastName = ? , email = ? , address= ? where ID = ?',
        [firstName, lastName, email, address, userID]);

    return res.redirect('/');
}
module.exports = {
  getHomepage, getDetailPage, createNewUser, deleteUser, getEditPage, postUpdateUser
}
