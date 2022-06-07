const express = require('express')

const router = express.Router()

// models
const Specs = require('../models/spec')

// routes
router.get('/', (req, res) => {
  Specs
    .findAll()
    .then(specs => res.json(specs))
})
// insert PUT and EDIT route once database columns confirmed

router.delete('/:id', (req, res) => {
  const specId = req.params.id

  Specs
    .delete([specId])
    .then(() => res.json({ message: 'deleted successfully' }))
})

module.exports = router