function renderLogin() {
    document.querySelector('#page').innerHTML = `
    <section class="log-in">
        <form action="" onSubmit="login(event)">
            <h2>Login:</h2>
            <fieldset>
                <label for="">Username:</label>
                <input type="text" name="userName">
            </fieldset>
            <fieldset>
                <label for="">Password:</label>
                <input type="password" name="password">
            </fieldset>

            <button>Login</button>
        </form>
    </section>
    `
}

function login(event) {
    event.preventDefault()
    const form = event.target
    const data = Object.fromEntries(new FormData(form))
    console.log(data)
    fetch('/api/sessions', {
      method: "POST",
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(data)
    })
      .then(res => res.json())
    .then(user => state.loggedInUser = user)
    .then(() => renderPcList())
}