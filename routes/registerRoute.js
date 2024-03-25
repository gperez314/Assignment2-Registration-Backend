const express = require('express')
const router = express.Router()
const {registerUser, confirmUser} = require('../controllers/registerController')

// Route to register user
router.post('/register',registerUser)

// Route for user confirmation
router.get('/user',confirmUser)

module.exports = router