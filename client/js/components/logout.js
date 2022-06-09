function renderLogout() {
  //state = state.slice(2)
  delete state.loggedInUser
  renderLoginStatus()
  fetch('/api/pcs')
    .then(res => res.json())
    .then(pcs => {
      state.pcs = pcs
      renderPcList()
    })
}