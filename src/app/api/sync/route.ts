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
    } catch (_) {
        return sendResponseJson(false, '数据库同步失败，详细日志请查看log文件夹下的log.txt', 500)
    }
    return sendResponseJson(true, '数据库同步成功')
}