import { Module } from 'vuex'
import { RootState } from '../state'
import { UserState } from './state'

const state: UserState = {
    str: ''
}
export const user: Module<RootState, UserState> = {
    state
}
