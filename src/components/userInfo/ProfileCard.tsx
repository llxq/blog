import React from 'react'
import Image from 'next/image'
import { Button } from 'antd'

export const ProfileCard = () => {
    return (
        <div className="flex flex-col gap-4 text-sm shadow-md rounded-lg bg-white p-4">
            <div className="h-20 relative">
                <Image src="https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" fill className="rounded-md object-cover" />
                <Image src="https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={ 48 } height={ 48 } className="object-cover rounded-full h-12 w-12 absolute left-0 right-0 m-auto -bottom-4 ring-white ring-1 z-10" />
            </div>
            <div className="pt-1 h-max flex flex-col gap-2 items-center">
                <span className="font-semibold text-lg">赖大宝</span>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                            <Image src="https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={ 12 } height={ 12 } className="rounded-full w-3 h-3 object-cover" />
                            <Image src="https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={ 12 } height={ 12 } className="rounded-full w-3 h-3 object-cover" />
                            <Image src="https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={ 12 } height={ 12 } className="rounded-full w-3 h-3 object-cover" />
                        </div>
                        <span className="text-gray-500">5100 关注</span>
                    </div>
                </div>
                <Button type="primary">我的简介</Button>
            </div>
        </div>
    )
}