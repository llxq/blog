'use client'
import React, { useState } from 'react'
import MobileMenu from '@/components/MobileMenu'
import Link from 'next/link'
import Image from 'next/image'
import LoginComponent from '@/components/LoginComponent'

const Navbar = () => {

    const [showLoginComponent, setShowLoginComponent,] = useState(true)

    return (
        <div className="flex items-center justify-between h-24 navbar__container">
            { /* 左边 */ }
            <div className="left__content md:hidden lg:block w-[20%]">
                <Link href="/" className="font-bold text-blue-600 text-xl">赖大宝</Link>
            </div>
            { /* 中间 */ }
            <div className="middle__content hidden md:flex w-[50%] text-sm">
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
            </div>
            { /* 右边 */ }
            <div className="right__content w-[30%] flex justify-end gap-4 xl:gap-8">
                <MobileMenu />
            </div>

            {
                showLoginComponent && (
                <LoginComponent close={ () => setShowLoginComponent(false) } />
                )
            }
        </div>
    )
}

export default Navbar