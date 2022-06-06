const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

//user
const User = require('../models/user')

router.post('/', (req, res) => {
  const {name, email, password} = req.body
  //using bcrypt

  const passswordDigest = bcrypt.hashSync(password, bcrypt.genSaltSync|(10), null)

  User
    .create(name, email, passswordDigest)
    .then(userName => res.json(userName))
})

module.exports = router