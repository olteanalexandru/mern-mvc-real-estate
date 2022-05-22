export {};
const express = require('express');
const router = express.Router()
const {registerUser, loginUser, getMe, PutUser} = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')

router.post('/login', loginUser)
router.get('/me',protect, getMe)
router.route('/').put( PutUser).post( registerUser)


module.exports = router