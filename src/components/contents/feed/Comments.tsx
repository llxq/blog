import React from 'react'
import Image from 'next/image'
import { Input } from 'antd'
import { Avatar } from '@/components/Avatar'

const { TextArea, } = Input

export const Comments = () => {
    return (
        <div className="md:pl-14 md:pr-6">
            <div className="rounded-lg flex gap-4 text-sm justify-between">
                { /*输入*/ }
                <Avatar src="https://images.pexels.com/photos/27680935/pexels-photo-27680935.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="mt-0.5" />
                { /* post */ }
                <div className="flex-1">
                    { /*text input*/ }
                    <div className="flex gap-2 justify-end items-end">
                        <div className="flex-1 bg-slate-100 rounded-lg">
                            <TextArea autoSize={ { minRows: 2, } } variant="borderless" placeholder="说点什么吧" />
                        </div>
                        <Image src="/emoji.png" alt="emojo" width={ 20 } height={ 20 } className="w-5 h-5  cursor-pointer" />
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-6 gap-4">
                <Avatar src="https://images.pexels.com/photos/27680935/pexels-photo-27680935.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                <div className="flex flex-col gap-2">
                    <div className="font-medium">赖大宝</div>
                    <p>在这个美好的日子里，我感受到了前所未有的快乐，每一个瞬间都充满了幸福和满足，真是太开心啦！</p>
                    <div className="flex gap-8">
                        <div className="flex items-center gap-4">
                            <Image src="/like.png" alt="喜欢" width={ 16 } height={ 16 }
                                   className="cursor-pointer w-4 h-4" />
                            <span className="text-gray-300">|</span>
                            <span className="text-gray-500">123 喜欢</span>
                        </div>
                        <div className="text-gray-500">赖大宝</div>
                    </div>
                </div>
                <Image src="/more.png" alt="更多" width={ 16 } height={ 16 } className="cursor-pointer w-4 h-4" />
            </div>
        </div>
    )
}
