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

fetch('/api/specs', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
})
    .then(res => res.json())
    .then(cpus => {
        cpus.forEach(cpu => {
            state.cpus.push(cpu.name)
        });
    })
    .then(cases => {
        cases.forEach(pcCase => {
            state.cases.push(pcCase.name)
        })
    })
    .then(gpus => {
        gpus.forEach(gpu => {
            state.gpus.push(gpu.name)
        })
    })
    .then(motherboards => {
        motherboards.forEach(motherboard => {
            state.motherboards.push(motherboard.name)
        })
    })
    .then(psus => {
        psus.forEach(psu => {
            state.psus.push(psu.name)
        })
    })
    .then(ram => {
        ram.forEach(ramType => {
            state.ram.push(ramType.name)
        })
    })
    .then(ssds => {
        ssds.forEach(ssd => {
            state.ssds.push(ssd.name)
        })
    })

