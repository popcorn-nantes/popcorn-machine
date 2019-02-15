export const state = () => ({
  // le texte de la recherche en cours, qui doit être conservée
  // si on navigue d'une page à l'autre.
  currentSearch: ''
})

export const mutations = {
  setCurrentSearch(state, currentSearch) {
    state.currentSearch = currentSearch
  }
}
