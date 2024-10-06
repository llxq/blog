import { useScrollStore } from '@/lib/hooks/useScrollStore'
import Image from 'next/image'
import { useState } from 'react'

export const Stories = () => {

    const {  scrollRef, } = useScrollStore()

    const [storeList,] = useState(new Array(10).fill(0).map((_, index) => {
        return {
            avatar: 'https://images.pexels.com/photos/28273897/pexels-photo-28273897.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            name: `赖大宝${ index + 1 }`,
        }
    }))
    return (
        <div ref={ scrollRef } className="scroll-smooth p-4 bg-white rounded-lg shadow-md overflow-x-scroll text-sm scrollbar-hidden">
            <div className="flex gap-8 overflow-hidden w-max">
                {
                    storeList.map(item => {
                        return (
                            <div key={ item.name } className="flex flex-col items-center gap-2 cursor-pointer">
                                <Image src={ item.avatar } alt={ item.name } width={ 64 } height={ 64 }
                                       className="w-16 h-16 rounded-full right-2" />
                                <span className="font-medium">{ item.name }</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}