import { UserAvatar } from '@/components/Avatar'
import { UserInfoNavbarCard } from '@/components/userInfo/UserInfoNavbarCard'
import { useAuthAction } from '@/lib/hooks/useAuthAction'
import { useUserInfo } from '@/lib/hooks/useUserInfo'
import { Popover } from 'antd'
import Image from 'next/image'
import { useState, type MouseEvent } from 'react'

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
    const [open, setOpen,] = useState(false)

    const openUserInfo = useAuthAction<MouseEvent<HTMLDivElement>>(event => {
        console.log(event, '123')
    })

    const closePopover = () => {
        setOpen(false)
    }

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen)
    }

    return (
        <div className="gap-6 items-center flex">
            <Image className="cursor-pointer" title="好友" src="/people.png" alt="好友" width={ 20 } height={ 20 } />
            <Image className="cursor-pointer" title="消息" src="/messages.png" alt="消息" width={ 16 } height={ 16 } />
            <Image className="cursor-pointer" title="通知" src="/notifications.png" alt="通知" width={ 16 } height={ 16 } />
            <Popover open={ open } onOpenChange={ handleOpenChange } content={ <UserInfoNavbarCard onClick={ closePopover } /> } placement="topRight" arrow={ false } trigger="click">
                <div className="w-8 h-8 cursor-pointer hidden md:block" onClick={ openUserInfo }>
                    <UserAvatar />
                </div>
            </Popover>
        </div>
    )
}

export default function UserInfoNavbar () {
    const { token, } = useUserInfo()
    return <div className="hidden md:block">{ token ? <LoginComponent /> : <UnLoginComponent /> }</div>
}
