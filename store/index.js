import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      questionsAnswered: [],
      jsonData: 'empty'
    }),
    mutations: {
      addJson(state, json) {
        state.jsonData = json
      },
      addQuestion(state, question) {
        state.questionsAnswered.push(question)
      },
      resetStory(state) {
        state.questionsAnswered = []
      }
    }
  })
}

export default createStore
