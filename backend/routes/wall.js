const express = require('express');
const router = express.Router();

const wallCtrl = require('../controllers/wall');
const auth = require('../middleware/auth');

router.post('/', auth, wallCtrl.newPost); 
router.get('/', wallCtrl.getAllTheWall); 


module.exports = router;