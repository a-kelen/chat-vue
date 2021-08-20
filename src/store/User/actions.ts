import { axios } from '@/axios'
import { User } from '@/entities/User'
import { ActionTree } from 'vuex'
import { RootState } from '../state'
import { UserMutations } from './mutations'
import { UserState } from './state'

export enum UserActions {
    getCurrentUser = 'getCurrentUser'     
}

export const actions: ActionTree<UserState, RootState> = {
    async [UserActions.getCurrentUser]({ commit }) {
       const user = await axios.get<User>('/user/current')
       commit(UserMutations.set_current_user, user)
    }
}