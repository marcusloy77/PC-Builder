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
            <h2>${pc.name}</h2>
        </header>
        <section class="specs">
            <button>Select Parts</button>
        </section>
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