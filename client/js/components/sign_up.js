function renderSignUp() {
    document.querySelector('#page').innerHTML = `
    <section class="sign-up">
        <form onSubmit="signUp(event)">
            <fieldset>
                <label for="">First Name:</label>
                <input type="text" name="firstName">
            </fieldset>
            <fieldset>
                <label for="">Last Name:</label>
                <input type="text" name="lastName">
            </fieldset>
            <fieldset>
                <label for="">Username:</label>
                <input type="text" name="userName">
            </fieldset>
            <fieldset>
                <label for="">Email:</label>
                <input type="text" name="email">
            </fieldset>
            <fieldset>
                <label for="">Password:</label>
                <input type="password" name="password">
            </fieldset>
            <button>Sign Up</button>
        </form>
    </section>
    `
}

function signUp(event) {
    event.preventDefault()
    const form = event.target
    const data = Object.fromEntries(new FormData(form))
    console.log(JSON.stringify(data))

    fetch('/api/users', {
        method: 'POST',
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
        if (res.error) {
            console.log(res.error)
        } else {
            state.loggedInUser = res
            renderPcList()
        }
    })
}