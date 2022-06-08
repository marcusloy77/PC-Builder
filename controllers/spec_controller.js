const express = require('express')
const router = express.Router()
const {Cases, CPUs, Graphics_cards, Motherboards, PSUs, Ram, SSDs} = require('../models/spec')

router.get('/', (req, res) => {
  CPUs
    .findAll()
    .then(cpus => res.json(cpus))
})

module.exports = router