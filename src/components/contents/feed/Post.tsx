import React from 'react'
import Image from 'next/image'
import { Comments } from '@/components/contents/feed/Comments'
import { Avatar } from '@/components/Avatar'

export const Post = () => {
    return (
        <div className='flex flex-col p-6 last:border-0 border-b border-slate-100'>
            { /* title */ }
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <Avatar src="https://images.pexels.com/photos/27680935/pexels-photo-27680935.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                    <span className="font-medium">赖大宝</span>
                </div>
                <Image src="/more.png" alt="更多" width={ 16 } height={ 16 } />
            </div>
            { /*desc*/ }
            <div className="flex flex-col gap-2 pl-14 pr-6">
                <p className="font-medium">今天的阳光格外明媚，我的心里也充满了喜悦，仿佛整个世界都变得美好起来，真是让人开心不已的一天！</p>
                <div className="w-full min-h-96 relative">
                    <Image src="https://images.pexels.com/photos/17086869/pexels-photo-17086869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="图片" fill className="object-contain rounded-md" />
                </div>
            </div>

            { /* interaction */ }
            <div className="flex items-center justify-between text-sm mb-4 mt-4 md:pl-14 md:pr-6">
                <div className="flex gap-4">
                    <div className="flex items-center gap-3 bg-slate-50 p-2 pt-1.5 pb-1.5 rounded-xl">
                        <Image src="/like.png" alt="更多" width={ 16 } height={ 16 } className="cursor-pointer" />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123<span className="hidden md:inline"> 喜欢</span></span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50 p-2 pt-1.5 pb-1.5 rounded-xl">
                        <Image src="/comment.png" alt="更多" width={ 16 } height={ 16 } className="cursor-pointer" />
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123<span className="hidden md:inline"> 评论</span></span>
                    </div>
                </div>
                <div className="flex items-center gap-3 bg-slate-50 p-2 pt-1.5 pb-1.5 rounded-xl">
                    <Image src="/share.png" alt="更多" width={ 16 } height={ 16 } className="cursor-pointer" />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">123<span className="hidden md:inline"> 分享</span></span>
                </div>
            </div>

            { /* comments */ }
            <Comments />
        </div>
    )
}