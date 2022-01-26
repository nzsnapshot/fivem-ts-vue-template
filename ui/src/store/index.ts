import { InjectionKey } from 'vue';
import { createStore, Store as VuexStore, useStore as vuexUseStore } from 'vuex';

// * types
import { ModuleState } from '../types/typings'

// * states
import module from './modules/module';

export interface StateInterface {
  module: ModuleState;
}

export const store = createStore({
  modules: {
    module
  },
  strict: true,
});

export const key: InjectionKey<VuexStore<StateInterface>> = Symbol()

export function useStore() {
  return vuexUseStore(key);
}