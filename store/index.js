import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      questionsAnswered: []
    }),
    mutations: {
      addQuestion(state, c) {
        state.questionsAnswered.push(c)
      },
      resetStory(state) {
        state.questionsAnswered = []
      }
    }
  })
}

export default createStore
