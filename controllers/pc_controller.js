const express = require('express')

const router = express.Router()

// models
const Pc = require('../models/pc_list')

// routes
router.get('/', (req, res) => {
  const userId = req.params.id

  Pc
    .findByUserId(userId)
    .then(pcs => res.json(pcs))
})

router.post('/', (req, res) => {
  const userId = req.session.userId
  const pcName = req.body.name

  Pc
    .create(userId, pcName)
    .then(pc => res.json(pc))
})
// insert PUT and EDIT route once database columns confirmed

router.delete('/:id', (req, res) => {
  const pcId = req.params.id

  Pc
    .delete([pcId])
    .then(() => res.json({ message: 'deleted successfully' }))
})

module.exports = router