import { createSlice } from '@reduxjs/toolkit'

export interface ILoginStatusState {
    isOpenLoginModal: boolean
}


export const LOGIN_STATUS_SLICE = createSlice({
    name: 'loginStatus',
    initialState: {
        isOpenLoginModal: false,
    } as ILoginStatusState,
    reducers: {
        openLoginModal: (state) => {
            state.isOpenLoginModal = true
        },
        closeLoginModal: (state) => {
            state.isOpenLoginModal = false
        },
    },
})

export const { openLoginModal, closeLoginModal, } = LOGIN_STATUS_SLICE.actions

export const LoginStatusReducer = LOGIN_STATUS_SLICE.reducer

export type ILoginStatusDispatch = typeof LOGIN_STATUS_SLICE.actions
