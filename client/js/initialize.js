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