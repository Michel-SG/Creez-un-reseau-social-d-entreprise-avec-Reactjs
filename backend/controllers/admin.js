var mysql = require('mysql');
const mysqlConnection = require("../connectionSql");
//const axios = require('axios');

// get post to maderate
exports.getPostToModerate = (req, res, next) => {
  const Id = encodeURI(req.params.id);

  var sql = 'SELECT * FROM wall WHERE id= ?';
  const inserts = [Id];
  mysqlConnection.query(sql, inserts, (err, result)=> {
    if (err) {
      throw err;
    } else {
      const content = result[0].content //the content of the post we could moderate
      const moderationText = encodeURI(req.body.moderation);

      const newContentModerer = content +'<br/><h6>[Texte de modération : '+moderationText+' ]</h6>'; // moderate content
          
          // update the post
      var sqlUdatePost = 'UPDATE wall SET content = ? WHERE id= ?';   
      const inserts = [newContentModerer, Id];
      mysqlConnection.query(sqlUdatePost, inserts, (err, result)=> {
        if (err) {
          throw err;
        } else {
          res.status(200).json(result);  
        }
      });
    }
  });
};

//update new user
exports.setupSignup = (req, res, next) => {
  const Id = req.params.id;
  const Admin = 1;
  var sql = 'UPDATE membre SET admin = ? WHERE id= ?';
  const inserts = [Admin, Id];    
  mysqlConnection.query(sql, inserts, (err, result)=> {
    if (err) {
      throw err;
    } else {
      res.status(200).json(result);  
    }
  });
};

//update new post
exports.setupPost = (req, res, next) => {
  const Id = req.params.id;
  const Admin = 1;
  var sql = 'UPDATE wall SET admin = ? WHERE id= ?'; 
  const inserts = [Admin, Id];     
  mysqlConnection.query(sql, inserts, (err, result)=> {
    if (err) {
      throw err;
    } else {
      res.status(200).json(result);  
    }
  });
};
 
 //delete the post without validated 
exports.deletePost = (req, res, next) => {
  const Id = req.params.id;
  var sql = 'DELETE FROM wall WHERE id= ?';
  const inserts = [Id];    
  mysqlConnection.query(sql, inserts, (err, result)=> {
    if (err) {
      throw err;
    } else {
      res.status(200).json(result);  
    }
  });
}; 

// get all last post
exports.getAllLastPost = (req, res, next) => {
  const Admin = 0;
  var sql = 'SELECT * FROM wall WHERE admin= ?';
  const inserts = [Admin];       
  mysqlConnection.query(sql, inserts, (err, result)=> {
    if (err) {
      throw err;
    } else {
      res.status(200).json(result);  
    }
  });
};

// get all last signup
exports.getAllLastSignup = (req, res, next) => {
  const Admin = 0;
  var sql = 'SELECT * FROM membre WHERE admin= ?';
  const inserts = [Admin];    
  mysqlConnection.query(sql, inserts, (err, result)=> {
    if (err) {
      throw err;
    } else {
      res.status(200).json(result);  
    }
  });
};