import { DB_CONFIG } from '@/lib/db/config'
import { Logger } from '@/lib/utils/server'
import { DataType, InitOptions, Model, ModelAttributeColumnOptions, Sequelize, type ModelStatic } from 'sequelize'

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
