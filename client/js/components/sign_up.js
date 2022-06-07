function renderSignUp() {
    document.querySelector('#page').innerHTML = `
    <section class="sign-up">
        <form onSubmit="signUp(event)">
            <fieldset>
                <label for="">First Name:</label>
                <input type="text" name="first-name">
            </fieldset>
            <fieldset>
                <label for="">Last Name:</label>
                <input type="text" name="last-name">
            </fieldset>
            <fieldset>
                <label for="">Email:</label>
                <input type="text" name="email">
            </fieldset>
            <fieldset>
                <label for="">Password:</label>
                <input type="text" name="password:">
            </fieldset>
            <button>Sign Up</button>
        </form>
    </section>
    `
}

function signUp(event) {
    event.preventDefault()
    const form = event.target
    const data = Object.fromEntries(new FormData(data))

    fetch('/api/users', {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(user => state.loggedInUser = user)
    .then(() => renderPcList())
}