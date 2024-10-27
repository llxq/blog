import { useUserInfo } from '@/lib/hooks/useUserInfo'
import Image from 'next/image'

export const Avatar = ({ src, className = '', }: { src: string, className?: string }) => {
    return (
        <Image src={ src } alt="头像" width={ 40 } height={ 40 } className={ `w-10 h-10 object-cover rounded-full ${ className }` } />
    )
}

export const UserAvatar = () => {
    const { avatar, } = useUserInfo()

    return (
        <div className='w-full h-full flex relative items-center justify-center bg-blue-100 rounded-full cursor-pointer select-none'>
            {
                avatar ? <Image src={ avatar } alt="头像" fill /> : <Image src={ '/noAvatar.png' } alt="头像" width={ 20 } height={ 20 } />
            }
        </div>
    )
}