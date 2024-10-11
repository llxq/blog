import { db } from '@/lib/db'
import '@/lib/db/models'
import { Logger } from '@/lib/utils/server'

export const syncDb = async () => {
    try {
        Logger.log('开始同步数据库')
        await db.sync({ force: true, })
        Logger.log('数据库同步成功')
    } catch (error: any) {
        Logger.error(`数据库同步失败: ${ typeof error === 'string' ? error : error?.message }`)
        throw error
    }
}
