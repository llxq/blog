import type { IClientDispatch, IClientState } from '@/store/client'
import { type IUserInfo, removeUserInfo, setUserInfo } from '@/store/client/userInfo'
import { useDispatch, useSelector, } from 'react-redux'

export const useUserInfo = () => {
    const userInfo = useSelector<IClientState, IUserInfo>(state => state.userInfo)

    const dispatch = useDispatch<IClientDispatch>()

    const setUserInfoHandler = (userInfo: Partial<IUserInfo>) => {
        dispatch(setUserInfo(userInfo))
    }

    const removeUserInfoHandler = () => {
        dispatch(removeUserInfo())
    }

    return {
        ...userInfo,
        setUserInfo: setUserInfoHandler,
        removeUserInfo: removeUserInfoHandler,
    }
}