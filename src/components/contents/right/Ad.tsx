import React from 'react'
import Image from 'next/image'
import { Button } from 'antd'

interface IAdProps {
  size: 'sm' | 'md' | 'lg'
}

/* 广告 */
export const Ad = ({ size, }: IAdProps) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm">
            { /*top*/ }
            <div className="flex items-center justify-between text-gray-500 font-medium">
                <span>广告</span>
                <Image className="w-4 h-4 cursor-pointer" src="/more.png" alt="更多" width={ 16 } height={ 16 } />
            </div>
            { /*bottom*/ }
            <div className={ `flex flex-col mt-4 ${ size === 'sm' ? 'gap-2' : 'gap-4' }` }>
                <div className={ `relative w-full ${ size === 'sm' ? 'h-24' : size === 'md' ? 'h-36' : 'h-48' }` }>
                    <Image className="rounded-lg object-cover" fill src="https://images.pexels.com/photos/1139613/pexels-photo-1139613.jpeg?auto=compress&cs=tinysrgb&w=600" alt="图片" />
                </div>
                <div className="flex items-center gap-4">
                    <Image className="w-6 h-6 rounded-full object-cover cursor-pointer" src="https://images.pexels.com/photos/1139613/pexels-photo-1139613.jpeg?auto=compress&cs=tinysrgb&w=600" alt="更多" width={ 24 } height={ 24 } />
                    <span className="text-blue-500 font-medium cursor-pointer">BigChef Lounge</span>
                </div>
                <p className={ size === 'sm' ? 'text-xs' : 'text-sm' }>清晨，阳光透过树叶洒下温暖，微风轻拂，花香四溢。鸟儿欢唱，人们微笑，生活如画，温暖而美好。珍惜每一刻，感受这份宁静与希望。</p>
                <Button type="primary" className="w-full">点击查更多信息</Button>
            </div>
        </div>
    )
}