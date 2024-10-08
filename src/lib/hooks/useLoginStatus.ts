import type { IClientDispatch, IClientState } from '@/lib/store/client'
import { closeLoginModal, openLoginModal } from '@/lib/store/client/loginStatus'
import { useDispatch, useSelector } from 'react-redux'

export const useLoginStatus = () => {
    const { isOpenLoginModal, } = useSelector((state: IClientState) => state.loginStatus)
    const dispatch = useDispatch<IClientDispatch>()

    const openLoginModalHandler = () => {
        dispatch(openLoginModal())
    }
    const closeLoginModalHandler = () => {
        dispatch(closeLoginModal())
    }
    return {
        isOpenLoginModal,
        openLoginModal: openLoginModalHandler,
        closeLoginModal: closeLoginModalHandler,
    }
}
