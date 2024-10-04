import React, { useState } from 'react'
import { Post } from '@/components/contents/feed/Post'

export const Feed = () => {

    const [postList,] = useState(new Array(10).fill(0).map((_, index) => {
        return {
            avatar: 'https://images.pexels.com/photos/17086869/pexels-photo-17086869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: `赖大宝${ index + 1 }`,
        }
    }))

    return (
        <div className="mt-6 flex flex-col bg-white rounded-lg shadow-md">
            {
                postList.map(m =>  <Post key={ m.name } />)
            }
        </div>
    )
}