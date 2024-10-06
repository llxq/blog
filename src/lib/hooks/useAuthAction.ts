import { useLoginStatus } from '@/lib/hooks/useLoginStatus'
import { useUserInfo } from '@/lib/hooks/useUserInfo'

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
