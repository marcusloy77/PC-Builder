// Include if statement - if the user selects a PC then they will be able to add specs:

// Add CPUs

function renderAddSpecs() {
  document.querySelector('#page').innerHTML = `
  <section class="select-specs">
    <form onSubmit="createSpecs(event)">
        <h2>Select your specs</h2>
        <fieldset>
            <label for="">CPUs</label>
            <option class="cpu_list">
                ${renderCPUList()}
            </option>
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
}

function renderCPUList() {
  
}

function createSpecs(event) {

}

