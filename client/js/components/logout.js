function renderLogout() {
  //state = state.slice(2)
  delete state.loggedInUser
  renderLoginStatus()
}