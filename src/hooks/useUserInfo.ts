import type { IClientDispatch, IClientState } from '@/store/client'
import { type IUserInfoState, clearUserInfo, setUserInfo } from '@/store/client/userInfo'
import { useDispatch, useSelector } from 'react-redux'

export const useUserInfo = () => {
    const userInfo = useSelector<IClientState, IUserInfoState>(state => state.userInfo)

    const dispatch = useDispatch<IClientDispatch>()

    const setUserInfoHandler = (userInfo: Partial<IUserInfoState>) => {
        dispatch(setUserInfo(userInfo))
    }

    const clearUserInfoHandler = () => {
        dispatch(clearUserInfo())
    }

    return {
        ...userInfo,
        setUserInfo: setUserInfoHandler,
        clearUserInfo: clearUserInfoHandler,
    }
}
