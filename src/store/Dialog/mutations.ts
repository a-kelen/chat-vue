import { MutationTree } from 'vuex'
import { DialogState } from './state'

export enum DialogMutations {
    set_user = 'set_user'
}

export const mutations: MutationTree<DialogState> = {
    [DialogMutations.set_user](state, payload: string) {

    }
}