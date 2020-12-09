const express = require('express');
const router = express.Router();

const adminCtrl = require('../controllers/admin');
const auth = require('../middleware/auth');

router.post('/moderation/:id', auth, adminCtrl.getPostToModerate);
router.put('/setupSignup/:id', auth, adminCtrl.setupSignup);
router.put('/setupPost/:id', auth, adminCtrl.setupPost);
router.delete('/deletePost/:id', auth, adminCtrl.deletePost);
router.get('/lastPosts/', auth, adminCtrl.getAllLastPost);
router.get('/lastSignup/', auth, adminCtrl.getAllLastSignup);

module.exports = router;