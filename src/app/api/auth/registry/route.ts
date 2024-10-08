import { createUser } from '@/lib/actions/createUser'
import { sendResponseJson } from '@/lib/utils/server/serverResponse'
import type { NextRequest } from 'next/server'

export async function POST (request: NextRequest) {
    const body = await request.json()
    try {
        const data = await createUser(body)
        return sendResponseJson({ data: data?.username }, '注册成功', 200)
    } catch (error: string | any) {
        return sendResponseJson(false, error, 500)
    }
}