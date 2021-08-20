import { Module } from 'vuex'
import { RootState } from '../state'
import { DialogState } from './state'

const state: DialogState = {
    str: ''
}
export const dialog: Module<RootState, DialogState> = {
    state
}
