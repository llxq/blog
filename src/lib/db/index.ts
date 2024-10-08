import { DB_CONFIG } from '@/lib/db/config'
import { Logger } from '@/lib/utils/server'
import MySQL from 'mysql2/promise'
import { DataType, InitOptions, Model, ModelAttributeColumnOptions, Sequelize, type ModelStatic } from 'sequelize'

// beforeConnect 会执行多次
let isCreateDatabase = false

/**
 * 防止表不存在，进行建表操作
 */
const setupDatabase = async () => {
    if (isCreateDatabase) {
        return
    }
    const connection = await MySQL.createConnection({
        host: DB_CONFIG.options.host,
        user: DB_CONFIG.username,
        password: DB_CONFIG.password,
    })
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${ DB_CONFIG.database }`)
    await connection.end()
    isCreateDatabase = true
}

const { username, password, database, options, } = DB_CONFIG

export const db = new Sequelize(database, username, password, options)

/**
 * 连接之前判断是否需要创建库
 */
// @ts-ignore
db.beforeConnect(async () => {
    await setupDatabase()
})

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

/**
 * 初始化model
 * @param model 
 * @param attributes 
 * @param options 
 */
/* eslint-disable no-unused-vars */
export const initModel = <M extends Model> (model: ModelStatic<Model>, attributes: {
    [P in keyof M]?: DataType | ModelAttributeColumnOptions<M>
}, options?: Partial<InitOptions>) => {
    model.init(attributes as any, Object.assign({}, options ?? {}, { sequelize: db, }))
}
