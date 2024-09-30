import { clientStore } from '@/store/client'
import { openLoginModal } from '@/store/client/loginStatus'
import { clearUserInfo } from '@/store/client/userInfo'

export const logOut = () => {
    clientStore.dispatch(openLoginModal())
    clientStore.dispatch(clearUserInfo())
}
