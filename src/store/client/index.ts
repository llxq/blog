import { LoginStatusReducer } from '@/store/client/loginStatus'
import { UserInfoReducer } from '@/store/client/userInfo'
import { configureStore } from '@reduxjs/toolkit'

export const clientStore = configureStore({
    reducer: {
        userInfo: UserInfoReducer,
        loginStatus: LoginStatusReducer,
    },
})

export type IClientState = ReturnType<typeof clientStore.getState>

export type IClientDispatch = typeof clientStore.dispatch
