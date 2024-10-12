import { Avatar } from '@/components/Avatar'
import { UploadImage } from '@/components/UploadImage'
import { Input } from 'antd'
import Image from 'next/image'

const { TextArea, } = Input

export const AddPost = () => {
    return (
        <div className="shadow-md mt-6 p-6 bg-white rounded-lg flex gap-4 text-sm justify-between">
            { /* avatar */ }
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
                { /*post options*/ }
                <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
                    <UploadImage>
                        <div className="flex items-center gap-2 cursor-pointer text-sm text-gray-400">
                            <Image src="/addimage.png" alt="图片" width={ 20 } height={ 20 } />
                            <span>图片</span>
                        </div>
                    </UploadImage>
                    <div className="flex items-center gap-2 text-sm">
                        <Image src="/addVideo.png" alt="视频" width={ 20 } height={ 20 } />
                        <span>视频</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <Image src="/poll.png" alt="投票" width={ 20 } height={ 20 } />
                        <span>投票</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <Image src="/addevent.png" alt="活动" width={ 20 } height={ 20 } />
                        <span>活动</span>
                    </div>
                </div>
            </div>
        </div>
    )
}