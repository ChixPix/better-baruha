const express = require('express')
const router = express.Router()
const orderController = require('./controllers/orderController')

router.get('/', orderController.home)
router.post('/register', orderController.register)

module.exports = router