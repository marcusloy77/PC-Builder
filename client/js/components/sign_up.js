function renderSignUp() {
    document.querySelector('#page').innerHTML = `
    <section class="sign-up">
        <form onSubmit="signUp(event)">
            <fieldset>
                <label for="">First Name:</label>
                <input type="text" name="first-name">
            </fieldset>
            
        </form>
    </section>
    `
}