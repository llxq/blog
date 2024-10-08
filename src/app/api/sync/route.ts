import { syncDb } from '@/lib/db/sync'
import { isDev } from '@/lib/utils/client'
import { sendResponseJson } from '@/lib/utils/server'

/**
 * 用于测试环境同步数据库
 * @returns void
 */
export async function POST () {
    if (!isDev) {
        return sendResponseJson(false, '非开发环境无法同步数据库', 500)
    }
    try {
        await syncDb()
    } catch (error: any) {
        return sendResponseJson(false, typeof error === 'string' ? error : error?.message, 500)
    }
    return sendResponseJson(true, '数据库同步成功')
}