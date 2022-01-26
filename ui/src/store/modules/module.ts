import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { StateInterface } from '..'
import { ModuleState } from '[path-to-type]/type'

const state: any = {
  pog: 'pog',
}

const getters: GetterTree<ModuleState, StateInterface> = {
  getPog: ({ pog }) => pog,
}

const actions: ActionTree<ModuleState, StateInterface> = {

}

const mutations: MutationTree<ModuleState> = {
  SET_POG(state, payload) {
    state.pog = payload
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line
  state.pog = 'poggo'
}