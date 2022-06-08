const express = require('express')
const router = express.Router()
const {Cases, CPUs, Graphics_cards, Motherboards, PSUs, Ram, SSDs} = require('../models/spec')

router.get('/cpus', (req, res) => {
  CPUs
    .findAll()
    .then(cpus => res.json(cpus))
})

router.get('/cases', (req, res) => {
  Cases
    .findAll()
    .then(cases => res.json(cases))
})

router.get('/gpus', (req, res) => {
  Graphics_cards
    .findAll()
    .then(gpus => res.json(gpus))
})

router.get('/motherboards', (req, res) => {
  Motherboards
    .findAll()
    .then(motherboards => res.json(motherboards))
})

router.get('/psus', (req, res) => {
  PSUs
    .findAll()
    .then(psus => res.json(psus))
})

router.get('/ram', (req, res) => {
  Ram
    .findAll()
    .then(ram => res.json(ram))
})

router.get('/ssds', (req, res) => {
  SSDs
    .findAll()
    .then(ssds => res.json(ssds))
})

module.exports = router