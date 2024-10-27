import { getUserInfo } from '@/lib/actions/getUserInfo'
import { Auth, sendResponseJson } from '@/lib/utils/server'
import type { NextRequest } from 'next/server'

export const GET = Auth(async (_: NextRequest, { params , }) => {
    const { id, } = params
    try {
        const userInfo = await getUserInfo(id)
        return sendResponseJson(userInfo, '获取用户成功', 200)
    } catch (error) {
        return sendResponseJson(false, error, 500)
    }
})