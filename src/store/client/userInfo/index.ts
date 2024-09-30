import { createSlice } from '@reduxjs/toolkit'

export interface IUserInfoState {
    /* 用户名 */
    userName: string
    /* token */
    token: string
    /* 用户id */
    userId: string
    /* 头像 */
    avatar?: string
}

/**
 * 用户信息store
 */
const USER_INFO_SLICE = createSlice({
    name: 'userInfo',
    initialState: {
        userName: '测试',
        token: '12',
        userId: '1',
        avatar: '',
    } as IUserInfoState,
    reducers: {
        /**
         * 设置用户信息
         * @param state
         * @param action
         */
        setUserInfo: (state, action) => {
            Object.assign(state, action.payload)
        },
        /**
         * 清空用户信息
         * @param state
         */
        clearUserInfo: state => {
            Object.keys(state).forEach(key => Reflect.set(state, key, ''))
        },
    },
})

export const { setUserInfo, clearUserInfo, } = USER_INFO_SLICE.actions

export type IUserInfoDispatch = typeof USER_INFO_SLICE.actions

export const UserInfoReducer = USER_INFO_SLICE.reducer
