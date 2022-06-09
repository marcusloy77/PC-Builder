const state = {
    //example pcs: [{pc1: {gpu: "graph1", cpu:"cpu1"}}, {pc2: {}}]
    pcs: [],
    cpus: [],
    cases: [],
    gpus: [],
    motherboards: [],
    psus: [],
    ram: [],
    ssds: []
}



fetch('/api/pcs')
    .then(res => res.json())
    .then(pcs => {
      state.pcs = pcs
      renderPcList()
    })

fetch('/api/cpus')
    .then(res => res.json())
    .then(cpus => {
        cpus.forEach(cpu => {
            state.cpus.push(cpu.name)
        })
    })

fetch('/api/cases')
    .then(res => res.json())
    .then(cases => {
        cases.forEach(pcCase => {
            state.cases.push(pcCase.name)
        })
    })

fetch('/api/gpus')
    .then(res => res.json())
    .then(gpus => {
        gpus.forEach(gpu => {
            state.gpus.push(gpu.name)
        })
    })

fetch('/api/ram')
    .then(res => res.json())
    .then(ram => {
        ram.forEach(ram => {
            state.ram.push(ram.name)
        })
    })

fetch('/api/motherboards')
    .then(res => res.json())
    .then(motherboards => {
        motherboards.forEach(motherboard => {
            state.motherboards.push(motherboard.name)
        })
    })

fetch('/api/ssds')
    .then(res => res.json())
    .then(ssds => {
        ssds.forEach(ssd => {
            state.ssds.push(ssd.name)
        })
    })  

fetch('/api/psus')
    .then(res => res.json())
    .then(psus => {
        psus.forEach(psu => {
            state.psus.push(psu.name)
        })
    })

renderLoginStatus()

