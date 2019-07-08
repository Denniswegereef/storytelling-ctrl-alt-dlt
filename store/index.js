import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      questionsAnswered: [],
      jsonData: 'empty',
      nextQuestion: 1,
      ending: 1
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
      },
      nextQuestion(state, questionNumber) {
        state.nextQuestion = questionNumber
      },
      nextEnding(state, endingNumber) {
        state.ending = endingNumber
      }
    }
  })
}

export default createStore
