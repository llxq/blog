import { UserInfoNavbarCard } from '@/components/userInfo/UserInfoNavbarCard'
import { useAuthAction } from '@/hooks/useAuthAction'
import { useUserInfo } from '@/hooks/useUserInfo'
import Image from 'next/image'
import type { MouseEvent } from 'react'
import { Popover } from 'antd'

const UnLoginComponent = () => {
    const loginAndRegistry = useAuthAction<MouseEvent<HTMLSpanElement>>(event => {
        console.log(event, '123')
    })

    return (
        <div className='items-center flex'>
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 20 20"
                 width="24"
                 height="24"
                 fill="currentColor"
                 className="cursor-pointer">
                <circle cx="10" cy="7" r="2.5" />
                <path d="M10 10c-3 0-5 1.5-5 4v1h10v-1c0-2.5-2-4-5-4z" />
            </svg>
            <span className='cursor-pointer text-sm text-gray-600 select-none' onClick={ loginAndRegistry }>登录 / 注册</span>
        </div>
    )
}

const LoginComponent = () => {
    const { avatar, } = useUserInfo()
    const openUserInfo = useAuthAction<MouseEvent<HTMLDivElement>>(event => {
        console.log(event, '123')
    })
    return (
        <div className="gap-6 items-center flex">
            <Image className="cursor-pointer" title="好友" src="/people.png" alt="好友" width={ 20 } height={ 20 } />
            <Image className="cursor-pointer" title="消息" src="/messages.png" alt="消息" width={ 16 } height={ 16 } />
            <Image className="cursor-pointer" title="通知" src="/notifications.png" alt="通知" width={ 16 } height={ 16 } />
            <Popover content={ <UserInfoNavbarCard /> } placement="topRight" arrow={ false } trigger="click">
                <div className="cursor-pointer hidden md:block w-max" onClick={ openUserInfo }>
                    {
                        avatar ? (
                            <Image src={ avatar } alt="头像" width={ 32 } height={ 32 } />
                        ) : (
                            <div className="rounded-full w-[32px] h-[32px] bg-blue-100"></div>
                        )
                    }
                </div>
            </Popover>
        </div>
    )
}

export default function UserInfoNavbar () {
    const { token, } = useUserInfo()
    return <div className="hidden md:block">{ token ? <LoginComponent /> : <UnLoginComponent /> }</div>
}
