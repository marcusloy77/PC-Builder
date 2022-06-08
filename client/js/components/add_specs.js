// Include if statement - if the user selects a PC then they will be able to add specs:

// Add CPUs

function renderAddSpecs() {
    
  document.querySelector('#page').innerHTML = `
  <section class="select-specs">
    <form onSubmit="createSpecs(event)">
        <h2>Select your specs</h2>
        <fieldset>
            <label for="">CPUs</label>
            <select id="cpu_list">
                <option> Choose a CPU </option>
            </select>
        </fieldset>

        <fieldset>
            <label for="">Graphics Cards</label>
            <select id="graphics_card_list">
                <option> Choose a Graphics Card </option>
            </select>
        </fieldset>

        <fieldset>
            <label for="">Rams</label>
            <select id="ram_list">
                <option> Choose a Ram </option>
            </select>
        </fieldset>

        <fieldset>
            <label for="">Motherboards</label>
            <select id="motherboard_list">
                <option> Choose a Motherboard </option>
            </select>
        </fieldset>

        <fieldset>
            <label for="">SSDs</label>
            <select id="ssd_list">
                <option> Choose a SSD </option>
            </select>
        </fieldset>

        <fieldset>
            <label for="">PSUs</label>
            <select id="psu_list">
                <option> Choose a PSU </option>
            </select>
        </fieldset>

        <fieldset>
            <label for="">Cases</label>
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

function createSpecs(event) {
  event.preventDefault()
  const form = event.target
  const cpu = document.getElementById('cpu_list').value
  const gpu = document.getElementById('graphics_card_list').value
  const ram = document.getElementById('ram_list').value
  const motherboard = document.getElementById('motherboard_list').value
  const ssd = document.getElementById('ssd_list').value
  const psu = document.getElementById('psu_list').value
  const pcCase = document.getElementById('case_list').value

  if (cpu != 'Choose a CPU' && gpu != 'Choose a Graphic Card' && ram != 'Choose a Ram' && motherboard != 'Choose a Motherboard' && ssd != 'Choose a SSD' && psu != 'Choose a PSU' && pcCase != 'Choose a Case') {
    state.pcs.push({})
    let i = state.pcs.length-1
    state.pcs[i]['cpu'] = cpu
    state.pcs[i]['gpu'] = gpu
    state.pcs[i]['ram'] = ram
    state.pcs[i]['motherboard'] = motherboard
    state.pcs[i]['ssd'] = ssd
    state.pcs[i]['psu'] = psu
    state.pcs[i]['case'] = pcCase
  } else {
    console.log('Please finish adding your specs')
  }

  
  // state.pcs[i]['ram'] = ram
  // state.pcs[i]['motherboard'] = motherboard
  // state.pcs[i]['ssd'] = ssd
  // state.pcs[i]['psu'] = psu
  // state.pcs[i]['case'] = pcCase
}

