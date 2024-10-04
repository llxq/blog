import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const UserInfoLeftMediaCard = ({ userId, }: { userId?: string }) => {

    const mediaList = new Array(8).fill(0).map(() => {
        return 'https://images.pexels.com/photos/10653920/pexels-photo-10653920.jpeg?auto=compress&cs=tinysrgb&w=600'
    })

    return (
        <div className="p-4 bg-white shadow-md text-sm flex flex-col gap-4">
            { /*top*/ }
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">视频</span>
                <Link href="/" className="text-blue-500 text-xs">查看全部</Link>
            </div>
            <div className="flex xl:gap-4 md:gap-2 flex-wrap justify-start">
                {
                    mediaList.map((m, i) => {
                        return (
                            <div key={ i } className="relative xl:w-[calc(25%-12px)] md:w-[calc((100%*1/3)-6px)] h-24">
                                <Image src={ m } alt="" fill className="object-cover rounded-md" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}