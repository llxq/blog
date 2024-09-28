'use client'
import Link from 'next/link'
import { useState } from 'react'

const MobileMenu = () => {
    const [isOpen, setOpen,] = useState(false)
    return (
        <div className="mobile-menu__container md:hidden">
            <div className="flex flex-col gap-[4.5px] cursor-pointer"
                 onClick={ () => setOpen(prevState => !prevState) }>
                <div className={ `w-6 h-1 bg-blue-500 rounded-sm origin-left ease-in-out duration-500 ${ isOpen ? 'rotate-45' : '' }` }></div>
                <div className={ `w-6 h-1 bg-blue-500 rounded-sm ease-in-out duration-500  ${ isOpen ? 'opacity-0' : '' }` }></div>
                <div className={ `w-6 h-1 bg-blue-500 rounded-sm origin-left ease-in-out duration-500  ${ isOpen ? '-rotate-45' : '' }` }></div>
            </div>

            {
                isOpen && (
                    <div className="absolute left-0 top-24 w-full h-[calc(100vh-96px)] flex flex-col items-center justify-center gap-8 font-medium text-xl z-10 bg-white">
                        <Link href="/">主页</Link>
                        <Link href="/">好友</Link>
                        <Link href="/">分组</Link>
                        <Link href="/">故事</Link>
                        <Link href="/">登录</Link>
                    </div>
                )
            }
        </div>
    )
}

export default MobileMenu