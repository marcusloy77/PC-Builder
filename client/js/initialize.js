const state = {
    //example pcs: [{pc1: {gpu: "graph1", cpu:"cpu1"}}, {pc2: {}}]
    pcs: [],
    cpus: []
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