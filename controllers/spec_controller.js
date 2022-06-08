const express = require('express')
const router = express.Router()
const {Cases, CPUs, Graphics_cards, Motherboards, PSUs, Ram, SSDs} = require('../models/spec')

router.get('/', (req, res) => {
  findAllComponents()
})

module.exports = router


function findAllComponents() {
  const components = {
    //example pcs: [{pc1: {gpu: "graph1", cpu:"cpu1"}}, {pc2: {}}]
    cpus: [],
    cases: [],
    gpus: [],
    motherboards: [],
    psus: [],
    ram: [],
    ssds: []
  }
  Cases
    .findAll()
    .then(cases => res.json(cases))
    .then(cases => {
      cases.forEach(casePc => {
        components.casePc.push(casePc.name)
      });
  })
  Graphics_cards
    .findAll()
    .then(gpus => res.json(gpus))
    .then(gpus => {
      gpus.forEach(gpu => {
        components.gpus.push(gpu.name)
      });
  })
  CPUs
    .findAll()
    .then(cpus => res.json(cpus))
    .then(cpus => {
      cpus.forEach(cpu => {
        components.cpus.push(cpu.name)
      });
  })
  Motherboards
    .findAll()
    .then(mtrbrds => res.json(mtrbrds))
    .then(mtrbrds => {
      mtrbrds.forEach(mtb => {
        components.mtb.push(mtb.name)
      });
  })
  PSUs
    .findAll()
    .then(psus => res.json(psus))
    .then(psus => {
      psus.forEach(psu => {
        components.psu.push(psu.name)
      });
  })
  Ram
    .findAll()
    .then(rams => res.json(rams))
    .then(rams => {
      rams.forEach(ram => {
        components.ram.push(ram.name)
      });
  })
  SSDs
    .findAll()
    .then(ssds => res.json(ssds))
    .then(ssds => {
      ssds.forEach(ssd => {
        components.ssds.push(ssd.name)
      });
  })

  return components
}