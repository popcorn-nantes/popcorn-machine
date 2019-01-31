export const state = () => ({
  // le texte de la recherche en cours
  currentSearch: ''
})

export const mutations = {
  setCurrentSearch(state, currentSearch) {
    state.currentSearch = currentSearch
  }
}
