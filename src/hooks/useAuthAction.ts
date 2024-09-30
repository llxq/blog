import { useLoginStatus } from '@/hooks/useLoginStatus'
import { useUserInfo } from '@/hooks/useUserInfo'

export const useAuthAction = <T = any>(callBack: (_?: T) => void | Promise<void>) => {
    const { token, }= useUserInfo()
    const { openLoginModal, } = useLoginStatus()

    return (event?: T) => {
        ;(event as Event)?.preventDefault?.()
        if (!token) {
            openLoginModal()
        } else {
            callBack(event)
        }
    }
}
