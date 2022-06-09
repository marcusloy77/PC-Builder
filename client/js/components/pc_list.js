function renderPcList() {
    document.querySelector('#page').innerHTML = `
    <section class="pc-list">
        ${renderPcs()}
    </section>
    `
}

function renderPcs() {
    return state.pcs.map(pc => `
    <section class="pc" data-id="${pc.id}">
        <header>
            <h2 class="pc-name">${pc.name}</h2>
            <span class="delete" onClick="deletePc(event)">Delete</span>
            <span class="edit" onClick="editPc(event)">Edit</span>
            <ul> Current Components
                <li class="displayedCpu"> CPU: ${pc.cpu} </li>
                <li class="displayedGpu"> GPU: ${pc.graphics_card} </li> 
                <li class="displayedRam"> RAM: ${pc.ram} </li> 
                <li class="displayedMotherboard"> Motherboard: ${pc.motherboard} </li> 
                <li class="displayedSsd"> Solid State Drive: ${pc.ssd} </li> 
                <li class="displayedPsu"> Power Supply Unit: ${pc.psu} </li> 
                <li class="displayedCase"> Case: ${pc.pc_case} </li> 
            </ul>
        </header>
    </section>
    `).join('')
}

function addUserPcToState() {
    const data = state.loggedInUser.userId
    fetch(`/api/pcs/${data}`, {
      method: "GET",
      headers: {'Content-Type' : 'application/json'}
    })
    .then(res => res.json())
    .then(res => console.log(res, "this"))
    .then(res => console.log("helpMe"))
}

function deletePc(event) {
    const deleteBtn = event.target
    const pcDOM = deleteBtn.closest('.pc')
    const pcId = parseInt(pcDOM.dataset.id)
    fetch(`/api/pcs/${pcId}`, {
        method: 'DELETE'
    })
        .then(() => {state.pcs = state.pcs.filter(pc => pc.id != pcId)})
        .then(() => renderPcList())
}