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


