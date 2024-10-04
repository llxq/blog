import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Avatar } from '@/components/Avatar'
import { Button } from 'antd'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'

export const FriendRequests = () => {
    return (
        <div className="p-4 bg-white shadow-md text-sm flex flex-col gap-4">
            { /*top*/ }
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">好友请求</span>
                <Link href="/" className="text-blue-500 text-xs">查看全部</Link>
            </div>
            { /* bottom */ }
            <div className="flex items-center justify-between gap-1">
                <div className="flex-1 flex items-center gap-4">
                    <Avatar className="flex-shrink-0" src="https://images.pexels.com/photos/2048716/pexels-photo-2048716.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <span className="font-semibold">赖大宝</span>
                </div>
                <div className="flex gap-3 justify-end">
                    <Button type="primary" shape="circle" size="small" icon={ <CheckOutlined /> } />
                    <Button type="primary" danger shape="circle" size="small" icon={ <CloseOutlined /> } />
                </div>
            </div>
        </div>
    )
}