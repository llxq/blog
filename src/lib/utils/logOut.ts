import { clientStore } from '@/lib/store/client'
import { openLoginModal } from '@/lib/store/client/loginStatus'
import { clearUserInfo } from '@/lib/store/client/userInfo'

export const logOut = () => {
    clientStore.dispatch(openLoginModal())
    clientStore.dispatch(clearUserInfo())
}
