import { whiteApis } from '@/lib/configs/whiteAips'
import { sendResponseJson } from '@/lib/utils/server/serverResponse'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
    if (!whiteApis.includes(request.nextUrl.pathname)) {
        // 拿到请求头
        const headers = request.headers
        const authorization = headers.get('Authorization')
        if (!authorization) {
            return sendResponseJson(false, '未登录', 401)
        }
    }
    return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/api/:path*',
}