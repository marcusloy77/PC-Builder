function renderPcList() {
    document.querySelector('#pc-container').innerHTML = `
    <section class="pc-list">
        ${renderPcs()}
    </section>
    `
    if (!isLoggedIn()){
      document.querySelectorAll('.delete').forEach(doc => doc.innerHTML = ``)
      document.querySelectorAll('.edit').forEach(doc => doc.innerHTML = ``)
    }
    showCarousel()
    hideEditForm()
}

function renderPcs() {
    return state.pcs.map(pc => `
    <section class="pc" data-id="${pc.id}">
        <header>
            <h2 class="pc-name">${pc.name}</h2>
            <span class="delete" onClick="deletePc(event)">Delete</span>
            <span class="edit" onClick="renderEditPc(event)">Edit</span>
            <ul> Current Components
                <li class="displayedCpu"> CPU: ${pc.cpu} </li>
                <li class="displayedGpu"> GPU: ${pc.graphics_card} </li> 
                <li class="displayedRam"> RAM: ${pc.ram} </li> 
                <li class="displayedMotherboard"> Motherboard: ${pc.motherboard} </li> 
                <li class="displayedSsd"> SSD: ${pc.ssd} </li> 
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
    .then(pcs => state.pcs = pcs)
    .then(() => renderPcList())
    //.then(res => console.log(res, "this"))
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

function editPc(event) {
    const editBtn = event.target
    const pcDOM = editBtn.closest('.pc')
    const pcId = parseInt(pcDOM.dataset.id)
    const data = Object.fromEntries(new FormData(form))
    fetch(`/api/pcs/${pcId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(console.log())
}

function hideCarousel() {
    document.getElementById('carouselIndicators').innerHTML = ``
}

function showCarousel() {
    document.getElementById('carouselIndicators').innerHTML = `
    <ol class="carousel-indicators">
      <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselIndicators" data-slide-to="1"></li>
      <li data-target="#carouselIndicators" data-slide-to="2"></li>
      <li data-target="#carouselIndicators" data-slide-to="3"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="./front-page-images/brian-tromp-u3lqywFcN8w-unsplash.jpg" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="./front-page-images/jack-b-fewhfXbCUzI-unsplash.jpg" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="./front-page-images/tarn-nguyen-4a52btspyY8-unsplash.jpg" alt="Third slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="./front-page-images/javier-esteban-DmfYyzj8UG4-unsplash.jpg" alt="Fourth slide">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
    `
}

function hidePcList() {
    document.getElementById('pc-container').innerHTML = ``
}