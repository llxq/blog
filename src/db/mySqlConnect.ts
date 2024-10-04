import mysql2 from 'mysql2'
import { Sequelize } from 'sequelize'

const { DB_DATABASE, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_LOGGING, DB_POLL_MAX, DB_POLL_MIN, DB_POLL_ACQUIRE, DB_POLL_IDLE, } = process.env

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
    host: DB_HOST, // 主机
    dialect: 'mysql', // 指定连接的数据库类型
    port: +DB_PORT, // 端口
    logging(sql, timing) {
        if (DB_LOGGING === 'true') {
            console.log(`[sql日志]: ${ sql } 耗时：${ timing }ms`)
        }
    },
    pool: { // 连接池配置
        max: +DB_POLL_MAX, // 最大连接数
        min: +DB_POLL_MIN, // 最小连接数
        acquire: +DB_POLL_ACQUIRE, // 获取连接的超时时间
        idle: +DB_POLL_IDLE, // 空闲连接超时时间(超时后自动释放)
    }, 
    // @FIXME fix bug [Please install mysql2 package manually]
    // @SEE https://github.com/sequelize/sequelize/issues/9489
    dialectModule: mysql2,
})

/**
 * 测试数据库连接
 */
export const testConnection = async () => {
    try {
        await sequelize.authenticate()
        console.log('数据库链接成功')
    } catch (error) {
        console.log('数据库链接失败', error)
    }
}

// 开始测试链接数据库
testConnection()

/**
 * 关闭数据库连接
 */
export const closeConnection = async () => {
    await sequelize.close()
}

export const db = sequelize