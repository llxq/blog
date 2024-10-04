import React from 'react'
import { FriendRequests } from '@/components/contents/right/FriendRequests'
import { Birthdays } from '@/components/contents/right/Birthdays'
import { Ad } from '@/components/contents/right/Ad'
import { UserInfoRightCard } from '@/components/userInfo/userInfoRightCard'
import { UserInfoLeftMediaCard } from '@/components/userInfo/userInfoLeftMediaCard'

export const RightMenu = ({ userId, }: { userId?: string }) => {
    return (
        <div className="flex flex-col gap-6">
            {
                userId ? (
                    <>
                        <UserInfoRightCard userId={ userId } />
                        <UserInfoLeftMediaCard userId={ userId }  />
                    </>
                ) : null
            }
            <FriendRequests />
            <Birthdays />
            <Ad size="md" />
        </div>
    )
}