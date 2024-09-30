import { createSlice } from '@reduxjs/toolkit'

export interface IUserInfo {
    /* 用户名 */
    userName: string
    /* token */
    token: string
    /* 用户id */
    userId: string
}

/**
 * 用户信息store
 */
const USER_INFO_SLICE = createSlice({
    name: 'userInfo',
    initialState: {
        userName: '测试用户',
        token: '123',
        userId: '1'
    } as IUserInfo,
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
        removeUserInfo: state => {
            Object.assign(state, {
                name: '',
                token: '',
                userId: ''
            })
        }
    }
})

export const { setUserInfo, removeUserInfo } = USER_INFO_SLICE.actions

export type IUserInfoDispatch = typeof USER_INFO_SLICE.actions

export const UserInfoReducer = USER_INFO_SLICE.reducer
