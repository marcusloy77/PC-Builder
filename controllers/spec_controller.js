const express = require('express')
const router = express.Router()
const {Cases, CPUs, Graphics_cards, Motherboards, PSUs, Ram, SSDs} = require('../models/spec')

router.get('/', (req, res) => {
  CPUs
    .findAll()
    .then(cpus => res.json(cpus))

  Cases
    .findAll()
    .then(cases => res.json(cases))

  Graphics_cards
    .findAll()
    .then(gpus => res.json(gpus))

  Motherboards
    .findAll()
    .then(motherboards => res.json(motherboards))

  PSUs
    .findAll()
    .then(psus => res.json(psus))

  Ram
    .findAll()
    .then(ram => res.json(ram))

  SSDs
    .findAll()
    .then(ssds => res.json(ssds))
})

module.exports = router