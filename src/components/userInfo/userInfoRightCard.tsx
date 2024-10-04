import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from 'antd'

export const UserInfoRightCard = ({ userId, }: { userId: string }) => {
    return (
        <div className="p-4 bg-white shadow-md text-sm flex flex-col gap-2">
            { /*top*/ }
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">用户资料</span>
                <Link href="/" className="text-blue-500 text-xs">查看全部</Link>
            </div>
            <div className="flex flex-col gap-2 text-gray-500">
                <div className="flex items-center gap-2">
                    <span className="text-xl text-blue-500">赖大宝</span>
                    <span className="text-sm">@163.com</span>
                </div>
                <p>在宁静的清晨，阳光透过树叶洒下温暖的光影，微风轻拂，带来花香。鸟儿欢快地歌唱，似乎在庆祝新的一天。人们漫步于小径，脸上洋溢着幸福的微笑，心中充满对生活的热爱。每一瞬间都如同美丽的画卷，提醒我们珍惜当下，感受这份温暖与希望。</p>
                <div className="flex items-center gap-2">
                    <Image src="/map.png" alt="城市" width={ 16 } height={ 16 } />
                    <span>杭州市</span>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="/school.png" alt="学校" width={ 16 } height={ 16 } />
                    <span>杭州大学</span>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="/work.png" alt="工作" width={ 16 } height={ 16 } />
                    <span>在<b>杭州xx公司</b></span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-1 items-center">
                        <Image src="/link.png" alt="链接" width={ 16 } height={ 16 } />
                        <Link href="/" className="text-blue-500 font-medium">博客</Link>
                    </div>
                    <div className="flex gap-1 items-center">
                        <Image src="/date.png" alt="生日" width={ 16 } height={ 16 } />
                        <span>2023-12-12</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2 mt-2">
                    <Button type="primary" size="middle">关注</Button>
                    <span className="text-red-400 self-end cursor-pointer">拉黑</span>
                </div>
            </div>
        </div>
    )
}