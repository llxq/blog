import type { IClientDispatch, IClientState } from '@/lib/store/client'
import { clearUserInfo, setUserInfo } from '@/lib/store/client/userInfo'
import type { IClientUser } from '@/lib/utils/UserInterface'
import { useDispatch, useSelector } from 'react-redux'

export const useUserInfo = () => {
    const userInfo = useSelector<IClientState, IClientUser>(state => state.userInfo)

    const dispatch = useDispatch<IClientDispatch>()

    const setUserInfoHandler = (userInfo: Partial<IClientUser>) => {
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
