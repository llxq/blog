import { Logger } from '@/lib/utils/Logger'
import mysql2 from 'mysql2'
import type { Options } from 'sequelize/types/index'

const { DB_DATABASE, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_LOGGING, DB_POLL_MAX, DB_POLL_MIN, DB_POLL_ACQUIRE, DB_POLL_IDLE, } = process.env

export interface IDBConfig {
    database: string,
    username: string,
    password: string,
    options: Options
}

export const DB_CONFIG: IDBConfig = {
    database: DB_DATABASE,
    username: DB_USER,
    password: DB_PASSWORD,
    options: {
        host: DB_HOST, // 主机
        dialect: 'mysql', // 指定连接的数据库类型
        port: +DB_PORT, // 端口
        logging (sql, timing) {
            if (DB_LOGGING === 'true') {
                Logger.sql(sql, timing)
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
        // 强制表名称不自动转为复数
        define: {
            freezeTableName: true,
        },
    },
}