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
            
        </fieldset>

        <fieldset>
            <label for="">Ram</label>
            
        </fieldset>

        <fieldset>
            <label for="">Motherboards</label>
            
        </fieldset>

        <fieldset>
            <label for="">SSDs</label>
            
        </fieldset>

        <fieldset>
            <label for="">PSUs</label>
            
        </fieldset>

        <fieldset>
            <label for="">Cases</label>
            
        </fieldset>
    </form>
  </section>
  `
  renderCPUList()
}

function renderCPUList() {
  let options = document.getElementById('cpu_list')
  state.cpus.forEach(cpu => {
    options.innerHTML = options.innerHTML + `<option> ${cpu} </option>`
  })
}

function createSpecs(event) {

}

