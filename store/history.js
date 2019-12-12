import moment from 'moment'
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
    state.postList.forEach((element) => {
      element.time = new Date()
      element.time = moment(element.time).format('YYYY-MM-DD')
    })
  }
}
