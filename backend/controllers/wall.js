var mysql = require('mysql');
const mysqlConnection = require("../connectionSql");

// display all the content on the wall
exports.getAllTheWall = (req, res, next) => {
    var sql = 'SELECT * FROM wall ORDER BY id DESC'; 
    mysqlConnection.query(sql, (err, result)=> {
        if (err) {
        throw err;
        } else {
        res.status(200).json(result);  
        }
    });
};

// display new post
exports.newPost = (req, res, next) => {
  const title =   req.body.title;
  const content = req.body.content;
  const userId = req.userId;
  const imageUrl = req.body.imageUrl;
  var sqlPseudo = 'SELECT pseudo FROM membre WHERE id= ?'; 
    const inserts = [userId]
    mysqlConnection.query(sqlPseudo, inserts, (err, result1)=> {
        const pseudo = result1[0].pseudo 
        if (err) {
        throw err;
        } else { 
            const Admin = 0;
            var insertPost = "INSERT INTO wall (userId, userPseudo, title, content, urlImage, admin) VALUES (?, ?, ?, ?, ?, ?)";
            const inserts = [userId, pseudo, title, content, imageUrl, Admin]
            mysqlConnection.query(insertPost, inserts, (err, result)=> {
                if (err) {
                throw err;
                } else {                
                res.status(200).json({id: result.insertId});
                }
            });
        }
    })
};