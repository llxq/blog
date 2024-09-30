import { useUserInfo } from '@/hooks/useUserInfo'
import Link from 'next/link'

const UnLoginComponent = () => {
    return (
        <div className='flex items-center gap-2 text-sm'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
            >
                <circle cx="12" cy="8" r="2.5" />

                <path d="M12 12c-3 0-5 1.5-5 4v1h10v-1c0-2.5-2-4-5-4z" />
            </svg>
            <Link href="/" className='cursor-pointer text-sm text-gray-600 select-none'>登录/注册</Link>
        </div>
    )
}

const LoginComponent = ({ userName }: { userName: string }) => {
    return (
        <div>
            { userName }
        </div>
    )
}

export default function UserInfoNavbar () {
    const { token, userName } = useUserInfo()
    return token ? <LoginComponent userName={ userName } /> : <UnLoginComponent />
}