export const state = () => ({
  list: [],
  postList: []
})
export const mutations = {
  addHistoryItem (state, data) {
    state.list.push(data)
    console.log(state)
  },
  addDraftList (state, data) {
    state.postList.push(data)
    console.log(state)
  }
}
