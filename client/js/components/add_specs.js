function renderAddSpecs() {
    
  document.querySelector('#page').innerHTML = `
  <section class="select-specs">
    <form onSubmit="createSpecs(event)">
        <h2>Create Your PC!</h2>
        <fieldset>
            <label for=""><span class="red-asterisk">*</span>PC Name</label>
            <input type="text" id="pc-name" name="pc-name"></input>
        </fieldset>
        <fieldset>
            <label for=""><span class="red-asterisk">*</span>CPUs</label>
            <select id="cpu_list">
                <option> Choose a CPU </option>
            </select>
        </fieldset>

        <fieldset>
            <label for=""><span class="red-asterisk">*</span>Graphics Cards</label>
            <select id="graphics_card_list">
                <option> Choose a Graphics Card </option>
            </select>
        </fieldset>

        <fieldset>
            <label for=""><span class="red-asterisk">*</span>Rams</label>
            <select id="ram_list">
                <option> Choose a Ram </option>
            </select>
        </fieldset>

        <fieldset>
            <label for=""><span class="red-asterisk">*</span>Motherboards</label>
            <select id="motherboard_list">
                <option> Choose a Motherboard </option>
            </select>
        </fieldset>

        <fieldset>
            <label for=""><span class="red-asterisk">*</span>SSDs</label>
            <select id="ssd_list">
                <option> Choose a SSD </option>
            </select>
        </fieldset>

        <fieldset>
            <label for=""><span class="red-asterisk">*</span>PSUs</label>
            <select id="psu_list">
                <option> Choose a PSU </option>
            </select>
        </fieldset>

        <fieldset>
            <label for=""><span class="red-asterisk">*</span>Cases</label>
            <select id="case_list">
                <option> Choose a Case </option>
            </select>
        </fieldset>

        <button>Add Specs</button>
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


function renderCPUList() {
  let options = document.getElementById('cpu_list')
  state.cpus.forEach(cpu => {
    options.innerHTML = options.innerHTML + `<option> ${cpu} </option>`
  })
}

function renderGraphicsCardsList() {
  let options = document.getElementById('graphics_card_list')
  state.gpus.forEach(gpu => {
    options.innerHTML = options.innerHTML + `<option> ${gpu} </option>`
  })
}

function renderRamsList() {
  let options = document.getElementById('ram_list')
  state.ram.forEach(ram => {
    options.innerHTML = options.innerHTML + `<option> ${ram} </option>`
  })
}

function renderMotherboardsList() {
  let options = document.getElementById('motherboard_list')
  state.motherboards.forEach(motherboard => {
    options.innerHTML = options.innerHTML + `<option> ${motherboard} </option>`
  })
}

function renderSSDsList() {
  let options = document.getElementById('ssd_list')
  state.ssds.forEach(ssd => {
    options.innerHTML = options.innerHTML + `<option> ${ssd} </option>`
  })
}

function renderPSUsList() {
  let options = document.getElementById('psu_list')
  state.psus.forEach(psu => {
    options.innerHTML = options.innerHTML + `<option> ${psu} </option>`
  })
}

function renderCasesList() {
  let options = document.getElementById('case_list')
  state.cases.forEach(pcCase => {
    options.innerHTML = options.innerHTML + `<option> ${pcCase} </option>`
  })
}

function createPc(cpu, gpu, ram, motherboard, ssd, psu, pcCase, name) {
  let data = {cpu, gpu, ram, motherboard, ssd, psu, pcCase, name,id: state.loggedInUser.userId}
  fetch('api/pcs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(pc => {
      state.pcs.push(pc)
      renderPcList()
    })
}



function createSpecs(event) {
  event.preventDefault()
  const form = event.target
  const name = document.getElementById('pc-name').value
  const cpu = document.getElementById('cpu_list').value
  const gpu = document.getElementById('graphics_card_list').value
  const ram = document.getElementById('ram_list').value
  const motherboard = document.getElementById('motherboard_list').value
  const ssd = document.getElementById('ssd_list').value
  const psu = document.getElementById('psu_list').value
  const pcCase = document.getElementById('case_list').value

  if (cpu != 'Choose a CPU' && gpu != 'Choose a Graphic Card' && ram != 'Choose a Ram' && motherboard != 'Choose a Motherboard' && ssd != 'Choose a SSD' && psu != 'Choose a PSU' && pcCase != 'Choose a Case' && name.length > 0) {
    createPc(cpu, gpu, ram, motherboard, ssd, psu, pcCase, name)

  } else {
    alert('Please fill out all PC components')
  }
}

