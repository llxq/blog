'use client'
import MobileMenu from '@/components/menus/MobileMenu'
import UserInfoNavbar from '@/components/userInfo/UserInfoNavbar'
import { http } from '@/utils'
import { Input } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
    const [name, setName,] = useState()
    return (
        <div className="flex items-center justify-between h-16 navbar__container">
            这是查询的name：{ name }
            { /* 左边 */ }
            <div className="md:hidden lg:block w-[10%]">
                <button onClick={ async () => {
                    const { data: { data: [{ name: userName, },], }, } = await http.post('/api/users/test', { id: 2, })
                    setName(() => userName)
                } }>链接数据库</button>
                <Link href="/" className="font-bold text-blue-600 text-xl">Logo</Link>
            </div>
            { /* 中间 */ }
            <div className="hidden flex-1 md:flex text-sm items-center justify-between gap-4 mr-16">
                <div className="flex gap-6 text-gray-600">
                    <Link href="/" className="flex gap-2 items-center">
                        <Image className="w-4 h-4" src="/home.png" alt="主页" width={ 16 } height={ 16 } />
                        <span>主页</span>
                    </Link>
                    <Link href="/" className="flex gap-2 items-center">
                        <Image className="w-4 h-4" src="/friends.png" alt="好友" width={ 16 } height={ 16 } />
                        <span>好友</span>
                    </Link>
                    <Link href="/" className="flex gap-2 items-center">
                        <Image className="w-4 h-4" src="/stories.png" alt="故事" width={ 16 } height={ 16 } />
                        <span>故事</span>
                    </Link>
                </div>
                <div className="items-center bg-slate-100 hidden md:flex pr-3 rounded-xl">
                    <Input size="middle" placeholder="搜索....." variant="borderless" />
                    <Image src="/search.png" alt="搜索" width={ 16 } height={ 16 } />
                </div>
            </div>
            { /* 右边 */ }
            <div className="flex justify-end gap-2 xl:gap-8 items-center">
                <UserInfoNavbar />
                <MobileMenu />
            </div>
        </div>
    )
}

export default Navbar
