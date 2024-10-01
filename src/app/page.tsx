'use client'
import React from 'react'
import { LeftMenu } from '@/components/contents/LeftMenu'
import { Stories } from '@/components/contents/Stories'
import { AddPost } from '@/components/contents/AddPost'
import { Feed } from '@/components/contents/feed/Feed'
import { RightMenu } from '@/components/contents/RightMenu'

const AppPage = () => {
    return (
        <div className="flex gap-6 pt-6 pb-6 w-full">
            <div className="hidden xl:block w-[20%]">
                <LeftMenu />
            </div>
            <div className="w-full lg:w-[70%] xl:w-1/2">
                <Stories />
                <AddPost />
                <Feed />
            </div>
            <div className="hidden lg:block w-[30%]">
                <RightMenu />
            </div>
        </div>
    )
}

export default AppPage
