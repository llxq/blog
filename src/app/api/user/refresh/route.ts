import { getUserInfo } from '@/lib/actions/getUserInfo'
import { Auth, sendResponseJson } from '@/lib/utils/server'
import { NextRequest } from 'next/server'

export const GET = Auth(async (_: NextRequest, ...reset: any) => {
    const userId = reset[reset.length - 1] as string

    // 获取用户信息
    const userInfo = await getUserInfo(userId)

    return sendResponseJson(userInfo, '刷新成功', 200)
})