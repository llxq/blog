import { UserAvatar } from '@/components/Avatar'
import { useUserInfo } from '@/lib/hooks/useUserInfo'
import { logOut } from '@/lib/utils/client'
import { Button } from 'antd'
import { useRouter } from 'next/navigation'

export const UserInfoNavbarCard = ({ onClick, }: { onClick?: () => void }) => {
    const { username, userId, } = useUserInfo()
    const router = useRouter()

    return (
        <div className='w-[280px]' onClick={ onClick }>
            <div className='flex items-center gap-2'>
                <div className='w-10 h-10' onClick={ () => {
                    router.push(`/profile/${ userId }`)
                } }>
                    <UserAvatar />
                </div>
                <div>{ username }</div>
            </div>
            <div className='flex justify-center w-full mt-3'>
                <Button type='primary' className='w-full' onClick={ () => {
                    logOut()
                    router.push('/')
                } }>退出登录</Button>
            </div>
        </div>
    )
}
