import { createUser } from '@/lib/actions/createUser'
import { login } from '@/lib/actions/login'
import { sendResponseJson } from '@/lib/utils/server/serverResponse'
import type { NextRequest } from 'next/server'

export async function POST (request: NextRequest) {
    const body = await request.json()
    try {
        const data = await createUser(body)
        // 注册成功 自动登录
        await login(data.username, body.password)
        return sendResponseJson({ data: data?.username, }, '注册成功', 200)
    } catch (error: string | any) {
        return sendResponseJson(false, error, 500)
    }
}