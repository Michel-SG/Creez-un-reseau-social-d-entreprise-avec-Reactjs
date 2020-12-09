const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var mysql = require('mysql');
const mysqlConnection = require("../connectionSql");

//users signup
exports.signup = (req, res, next) => {

const pseudo = encodeURI(req.body.pseudo);
const email = encodeURI(req.body.email);
const level = encodeURI(req.body.level);

var sqlMetier = 'SELECT metier FROM user_function WHERE id= ?'; 
const inserts = [level];
if(!level){
  return false;
} 
  mysqlConnection.query(sqlMetier,inserts, (err, data1)=> {
  const metier = data1[0].metier 
    if (err) {
      throw err;
    } else {
    
      bcrypt.hash(req.body.password, 10, (err, hash)=> {
        const Admin = 0;
        var sql = "INSERT INTO membre (pseudo, email, password, level, metier,admin) VALUES (?, ?, ?, ?, ?, ?)";
        const inserts = [pseudo, email,hash, req.body.level, metier, Admin];
        mysqlConnection.query(sql, inserts, (err, newdata)=> {
          if (err) {
           throw err;
          } else {
            
            res.status(200).json({ id: newdata.insertId});
          }
        });
      });
    }
  })
}

//user connected
exports.login = (req, res, next) => {

  const email = req.body.email;
  const password = req.body.password;
  var sql = 'SELECT * FROM membre WHERE email = ?';
  const inserts = [email]; 
  mysqlConnection.query(sql, inserts, (err, result)=> {
    if (err) {
      throw err;
    } else {  
      bcrypt.compare(password, result[0].password)
      .then(valid => {
        if (!valid) {
          return res.status(401).json({ error: 'Mot de passe incorrect !' });
        }

        //object with information will be send to frontend 
        res.status(200).json({
          userId: result[0].id, 
          userLevel: result[0].level, 
          userPseudo: result[0].pseudo, 
          token: jwt.sign( { userId: result[0].id },
          process.env.SECRET_CLE_TOKEN,{ expiresIn: '24h' }) }); 
      
      })
      .catch(error => res.status(500).json({ error }));
    }
  });
}

//display one user (profile)
exports.getOneUser = (req, res, next) => {
  const idUser = req.userId; 
  var sqlAllFromMembre = 'SELECT * FROM membre WHERE id = ?'; 
  const inserts = [idUser];  
  mysqlConnection.query(sqlAllFromMembre,inserts, (err, result)=> {
    if (err) {
      throw err;
    } else { 
      res.status(200).json(result);  
    }
  });

}

//delete user and his post
exports.deleteOneUser = (req, res, next) => {
  const idUser = req.userId;    
  var sql = 'DELETE wall, membre FROM membre INNER JOIN wall ON membre.id = wall.userId WHERE membre.id = ?';
  const inserts = [idUser];
  mysqlConnection.query(sql, inserts, (err, result)=> {
    if (err) {
      throw err;
    } else {
      console.log(result)
      res.status(200).json(result);  
    }
  });
}