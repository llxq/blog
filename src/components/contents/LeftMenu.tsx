import { Ad } from '@/components/contents/right/Ad'
import { ProfileCard } from '@/components/userInfo/ProfileCard'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

const linkArray = [
    {
        icon: 'posts',
        label: '我的帖子',
        url: '/',
    },
    {
        icon: 'activity',
        label: 'Activity',
        url: '/',
    },
    {
        icon: 'market',
        label: 'Marketplace',
        url: '/',
    },
    {
        icon: 'events',
        label: 'Events',
        url: '/',
    },
    {
        icon: 'albums',
        label: 'albums',
        url: '/',
    },
    {
        icon: 'videos',
        label: 'videos',
        url: '/',
    },
    {
        icon: 'news',
        label: 'news',
        url: '/',
    },
    {
        icon: 'courses',
        label: 'courses',
        url: '/',
    },
    {
        icon: 'lists',
        label: 'lists',
        url: '/',
    },
    {
        icon: 'settings',
        label: 'settings',
        url: '/',
    },
]

export const LeftMenu = ({ type, }: {type: 'home' | 'profile'}) => {
    return (
        <div className="flex flex-col gap-6">
            {
                type === 'profile' ? <ProfileCard /> : null
            }
            <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
                {
                    linkArray.map(m => {
                        return (
                            <Fragment key={ m.icon }>
                                <Link href={ m.url } className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
                                    <Image className="" src={ `/${ m.icon }.png` } alt={ m.label } width={ 20 } height={ 20 } />
                                    <span>{ m.label }</span>
                                </Link>
                                <hr className="border-t border-gray-50 w-36 self-center" />
                            </Fragment>
                        )
                    })
                }
            </div>
            <Ad size="sm" />
        </div>
    )
}