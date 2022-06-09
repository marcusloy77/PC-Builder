const express = require('express')

const User = require('../models/user')
const router = express.Router()
const bcrypt = require('bcrypt')

router.post('/', (req, res) => {
  const { userName, password } = req.body
  
  if (User.findByUserName(userName)) {
    User
    .findByUserName(userName)
    .then (user => {
      const isValidPassword = bcrypt.compareSync(password, user.password_digest)
      if (user && isValidPassword){
        //log in
        req.session.userId = user.id 
        res.json({userId: user.id, userName: user.user_name })
      } else {
        res.status(400).json( { message: 'wrong password!!!' } )
      }
    })
  } else {
    res.status(400).json ( { message: 'wrong login' } )
  }
})

module.exports = router