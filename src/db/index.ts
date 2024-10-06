import { DB_CONFIG } from '@/db/config'
import { Logger } from '@/utils/Logger'
import { Sequelize } from 'sequelize'

const { username, password, database, options, } = DB_CONFIG

export const db = new Sequelize(database, username, password, options)

/**
 * 测试数据库连接
 */
export const testConnection = async () => {
    try {
        await db.authenticate()
        Logger.log('数据库链接成功')
    } catch (error: any) {
        Logger.error(`数据库链接失败: ${ typeof error === 'string' ? error : error?.message }`)
    }
}

// 开始测试链接数据库
testConnection()

/**
 * 关闭数据库连接
 */
export const closeConnection = async () => {
    await db.close()
}