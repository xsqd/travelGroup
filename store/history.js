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
    const newData = { ...data }
    console.log(newData)
    state.postList.push(newData)
    console.log(state)
    state.postList.forEach((element) => {
      element.time = new Date()
      element.time = moment(element.time).format('YYYY-MM-DD')
    })
  }
}
