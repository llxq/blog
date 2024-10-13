import { useUserInfo } from '@/lib/hooks/useUserInfo'

export const UserInfoNavbarCard = () => {
    const { username, } = useUserInfo()
    return <div>{ username }</div>
}
