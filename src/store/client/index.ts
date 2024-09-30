import { UserInfoReducer } from '@/store/client/userInfo'
import { configureStore } from '@reduxjs/toolkit'

export const clientStore = configureStore({
    reducer: {
        userInfo: UserInfoReducer
    }
})

export type IClientState = ReturnType<typeof clientStore.getState>

export type IClientDispatch = typeof clientStore.dispatch
