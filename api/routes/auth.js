const router = require('express').Router()
const { register } = require('../controller/auth')


router.get('/', register)

module.exports = router