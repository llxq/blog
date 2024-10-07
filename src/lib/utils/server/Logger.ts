import fs from 'fs'
import path from 'path'

const logsDir = path.join(process.cwd(), 'public', 'logs')

const logFilePath = path.join(logsDir, 'log.txt')

const sqlFilePath = path.join(logsDir, 'sql.txt')

const writeLog = (message: string, filePath: string) => {
    // 写入日志
    fs.appendFile(filePath, message + '\n', (err) => {
        if (err) {
            console.log(err)
        }
    })
}

const getCurrentTime = () => {
    const date = new Date()
    return `${ date.getFullYear() }-${ date.getMonth() + 1 }-${ date.getDate() } ${ date.getHours() }:${ date.getMinutes() }:${ date.getSeconds() }`
}

/**
 * 日志记录
 * TODO: 所有的日志暂时都记录在 public/logs 文件夹下
 */
export class Logger {
    public static log (message: string) {
        // 写入日志
        writeLog(`[${ getCurrentTime() }]: ${ message }`, logFilePath)
    }

    public static error (message: string) {
        // 写入日志
        writeLog(`[失败日志][${ getCurrentTime() }]: ${ message }`, logFilePath)
    }

    public static sql (sql: string, timing?: number) {
        // 写入日志
        writeLog(`[${ getCurrentTime() }]: ${ sql } ${ typeof timing === 'number' ? ` 耗时：${ timing }ms` : '' }`, sqlFilePath)
    }
}