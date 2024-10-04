import React from 'react'
import Image from 'next/image'
import { Avatar } from '@/components/Avatar'
import { Button } from 'antd'
import Link from 'next/link'

export const Birthdays = () => {
    return (
        <div className="p-4 bg-white shadow-md text-sm flex flex-col gap-4">
            { /*top*/ }
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">生日</span>
            </div>
            { /* bottom */ }
            <div className="flex items-center justify-between gap-1">
                <div className="flex-1 flex items-center gap-4">
                    <Avatar className="flex-shrink-0"
                            src="https://images.pexels.com/photos/2048716/pexels-photo-2048716.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <span className="font-semibold">赖大宝</span>
                </div>
                <div className="flex gap-3 justify-end">
                    <Button type="primary" size="small">庆祝</Button>
                </div>
            </div>
            { /* upcoming */ }
            <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
                <Image className="w-6 h-6 cursor-pointer" src="/gift.png" alt="礼物" width={ 24 } height={ 24 } />
                <Link href="/" className="flex flex-col gap-1 text-xs">
                    <span className="text-gray-700 font-semibold">祝福</span>
                    <span className="text-gray-500">有 16 个好友即将过生日哦~</span>
                </Link>
            </div>
        </div>
    )
}