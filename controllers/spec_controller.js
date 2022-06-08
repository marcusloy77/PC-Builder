const express = require('express')
const router = express.Router()
const {Cases, CPUs, Graphics_cards, Motherboards, PSUs, Ram, SSDs} = require('../models/spec')

router.get('/api/cpus', (req, res) => {
  CPUs
    .findAll()
    .then(cpus => res.json(cpus))
})

router.get('/api/cases', (req, res) => {
  Cases
    .findAll()
    .then(cases => res.json(cases))
})

router.get('/api/gpus', (req, res) => {
  Graphics_cards
    .findAll()
    .then(gpus => res.json(gpus))
})

router.get('/api/motherboards', (req, res) => {
  Motherboards
    .findAll()
    .then(motherboards => res.json(motherboards))
})

router.get('/api/psus', (req, res) => {
  PSUs
    .findAll()
    .then(psus => res.json(psus))
})

router.get('/api/ram', (req, res) => {
  Ram
    .findAll()
    .then(ram => res.json(ram))
})

router.get('/api/ssds', (req, res) => {
  SSDs
    .findAll()
    .then(ssds => res.json(ssds))
})

module.exports = router