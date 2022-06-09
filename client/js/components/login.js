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
    hidePcList()
    hideCarousel()
}

function renderLoginStatus() {
    try  {
        if (state.loggedInUser.userName) {
        document.getElementById('homePageButtons').innerHTML = `
        <li class="logout" onClick="renderLogout()">Logout</li>
        <li onClick="renderAddSpecs()">Add PC</li>
    `}}
    catch {
    
        document.getElementById('homePageButtons').innerHTML = `
        <li class="sign-up" onClick="renderSignUp()">Sign Up</li>
        <li class="login" onClick="renderLogin()">Login</li>
        
    `}
    
}
function isLoggedIn() {
    try  {
        if (state.loggedInUser.userName) {
        return true
        }
    }

    catch {
    return false
    }
}

function login(event) {
    event.preventDefault()
    const form = event.target
    const data = Object.fromEntries(new FormData(form))
    fetch('/api/sessions', {
      method: "POST",
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(user => state.loggedInUser = user)
    .then(() => addUserPcToState(state.loggedInUser.userName))
    .then(() => renderPcList())
    .then(() => removeLoginForm())
    .then(() => renderLoginStatus())
}

// function login(event) {
//     event.preventDefault()
//     const form = event.target
//     const data = Object.fromEntries(new FormData(form))
//     fetch('/api/sessions', {
//       method: "POST",
//       headers: {'Content-Type' : 'application/json'},
//       body: JSON.stringify(data)
//     })
//     .then(res => res.json())
//     .then(res => {
//         if (res.error) {
//             console.log(res.error)
//         } else {
//             user => state.loggedInUser = user
//             .then(() => addUserPcToState(state.loggedInUser.userName))
//             .then(() => renderPcList())
//             .then(() => removeLoginForm())
//             .then(() => renderLoginStatus())
//         }
//     })
// }

function removeLoginForm() {
    document.getElementById('page').innerHTML = ``
}