import React from 'react'
import Image from 'next/image'

export const Avatar = ({ src, className = '', }: { src: string, className?: string }) => {
    return (
        <Image src={ src } alt="头像" width={ 40 } height={ 40 } className={ `w-10 h-10 object-cover rounded-full ${ className }` } />
    )
}