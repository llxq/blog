import type { IClientUser } from '@/lib/utils/UserInterface'
import { createSlice } from '@reduxjs/toolkit'

/**
 * 用户信息store
 */
const USER_INFO_SLICE = createSlice({
    name: 'userInfo',
    initialState: {
        id: '',       
        username: '',
        password: '',
        userId: '',   
        postCount: 0,          
        followerCount: 0,       
        followCount: 0,          
        email: '', 
        avatar: '', 
        cover: '',   
        name: '',            
        surname: '',          
        description: '', 
        city: '',        
        school: '', 
        work: '', 
        website: '', 
    } as IClientUser,
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


/**
 * Selector to get Authorization header
 */
export const getAuthHeader = (token: string) => {
    return {
        Authorization: `Bearer ${ token }`,
    }
}
