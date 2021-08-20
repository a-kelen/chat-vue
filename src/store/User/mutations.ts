import { User } from '@/entities/User'
import { MutationTree } from 'vuex'
import { UserState } from './state'

export enum UserMutations {
    set_current_user = 'set_current_user'
}

export const mutations: MutationTree<UserState> = {
    [UserMutations.set_current_user](state, payload: User) {
        state.currentUser = payload
    }
}