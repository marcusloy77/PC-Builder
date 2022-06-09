function renderEditPc(event) {
  const editBtn = event.target
  const pcDOM = editBtn.closest('.pc')
  const pcId = parseInt(pcDOM.dataset.id)
  let pcIndex = -1
  for (let i = 0; i < state.pcs.length; i++) {
    if (state.pcs[i].id === pcId){
        pcIndex = i
    }
  }
  document.querySelector('#page').innerHTML = `
  <section class="select-specs">
    <form onSubmit="editPc(event, ${pcId}, ${pcIndex})">
        <h2>Edit Your PC!</h2>
        <fieldset>
            <label for="">PC Name</label>
            <input type="text" id="pc-name" value="${state.pcs[pcIndex].name}" name="name"></input>
        </fieldset>
        <fieldset>
            <label for="">CPUs</label>
            <select id="cpu_list" name="cpu">
                <option> ${state.pcs[pcIndex].cpu} </option>
            </select>
        </fieldset>

        <fieldset>
            <label for="">Graphics Cards</label>
            <select id="graphics_card_list" name="graphics_card">
                <option> ${state.pcs[pcIndex].graphics_card} </option>
            </select>
        </fieldset>

        <fieldset>
            <label for="">Rams</label>
            <select id="ram_list" name="ram">
                <option> ${state.pcs[pcIndex].ram} </option>
            </select>
        </fieldset>

        <fieldset>
            <label for="">Motherboards</label>
            <select id="motherboard_list" name="motherboard">
                <option> ${state.pcs[pcIndex].motherboard} </option>
            </select>
        </fieldset>

        <fieldset>
            <label for="">SSDs</label>
            <select id="ssd_list" name="ssd">
                <option> ${state.pcs[pcIndex].ssd} </option>
            </select>
        </fieldset>

        <fieldset>
            <label for="">PSUs</label>
            <select id="psu_list" name="psu">
                <option>  ${state.pcs[pcIndex].psu} </option>
            </select>
        </fieldset>

        <fieldset>
            <label for="">Cases</label>
            <select id="case_list" name="pc_case">
                <option>  ${state.pcs[pcIndex].pc_case} </option>
            </select>
        </fieldset>

        <button>Save updates!</button>
    </form>
  </section>
  `
  renderCPUList()
  renderGraphicsCardsList()
  renderRamsList()
  renderMotherboardsList()
  renderSSDsList()
  renderPSUsList()
  renderCasesList()
  hideCarousel()
  hidePcList()
}

// function editSpecs(event) {
//   event.preventDefault()
//   const form = event.target
//   const name = document.getElementById('pc-name').value
//   const cpu = document.getElementById('cpu_list').value
//   const gpu = document.getElementById('graphics_card_list').value
//   const ram = document.getElementById('ram_list').value
//   const motherboard = document.getElementById('motherboard_list').value
//   const ssd = document.getElementById('ssd_list').value
//   const psu = document.getElementById('psu_list').value
//   const pcCase = document.getElementById('case_list').value

//   if (name.length > 0) {
//     createPc(cpu, gpu, ram, motherboard, ssd, psu, pcCase, name)
//   } else {
//     console.log('Please finish adding your specs')
//   }
// }

function editPc(event, pcId, pcIndex) {
  event.preventDefault()
  const form = event.target
  const data = Object.fromEntries(new FormData(form))
  showCarousel()
  renderPcList()
  fetch(`/api/pcs/${pcId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(pc => {
      state.pcs[pcIndex] = pc
      renderPcList()
    })
}

function hideEditForm() {
  document.getElementById('page').innerHTML = ``
}