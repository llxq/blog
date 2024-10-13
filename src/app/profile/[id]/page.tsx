'use client'
import { LeftMenu } from '@/components/contents/LeftMenu'
import { Feed } from '@/components/contents/feed/Feed'
import { RightMenu } from '@/components/contents/right/RightMenu'
import { useLoading } from '@/lib/context/LoadingContext'
import type { IClientUser } from '@/lib/db/models'
import { http } from '@/lib/utils/http'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const ProfilePage = () => {
    const { id: userId, } = useParams()
    const { loadingAction, } = useLoading()
    const [userDetails, setUserDetails,] = useState<IClientUser>()

    useEffect(() => {
        loadingAction(async () => {
            const { data, } = await http.get(`/api/user/${ userId }`)
            setUserDetails(data)
        })
    }, [])

    return (
        <div className="flex gap-6 pt-6 pb-6 w-full">
            <div className="hidden xl:block w-[20%] sticky">
                <LeftMenu type="profile" />
            </div>
            <div className="w-full lg:w-[70%] xl:w-1/2">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-full h-64 relative">
                            <Image src="https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" fill className="object-cover rounded-md" />
                            <Image src="https://images.pexels.com/photos/5331562/pexels-photo-5331562.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={ 128 } height={ 128 } className="w-32 h-32 object-cover rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-white ring-4" />
                        </div>
                        <h1 className="mt-20 mb-4 text-2xl font-medium">{ userDetails?.username }</h1>
                        <div className="flex items-center gap-12 mb-4 justify-center">
                            <div className="flex items-center flex-col">
                                <span className="font-medium">123</span>
                                <span className="text-sm text-slate-600">帖子</span>
                            </div>
                            <div className="flex items-center flex-col">
                                <span className="font-medium">1.2K</span>
                                <span className="text-sm text-slate-600">粉丝</span>
                            </div>
                            <div className="flex items-center flex-col">
                                <span className="font-medium">1.3K</span>
                                <span className="text-sm text-slate-600">关注</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Feed />
            </div>
            <div className="hidden lg:block w-[30%]">
                <RightMenu userId={ userId as string } />
            </div>
        </div>
    )
}

export default ProfilePage