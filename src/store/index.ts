import { createStore } from 'vuex'
import { RootState } from './state'
import { user } from './User'
import { dialog } from './Dialog'

export default createStore<RootState>({
  state: {
    str: ''
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    dialog
  }
})
