function renderAddPc() {
    document.querySelector('#page').innerHTML = `
    <section class="create-pc">
        <form onSubmit="createPc(event)">
            <h2>Add PC</h2>
            <fieldset>
                <label for="">PC Name:</label>
                <input type="text" name="name">
            </fieldset>
            <button>Add PC</button>
        </form>
    </section>      
    `
}

function createPc(event) {
    event.preventDefault()
    const form = event.target
    const data = Object.fromEntries(new FormData(form))
    console.log(JSON.stringify(data))

    fetch('/api/pcs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })

    .then(res => res.json())
    .then(pc => {
        state.pcs.push(pc)
        renderPcList()
    })
}