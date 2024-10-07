import { Logger } from '@/lib/utils/server'
import Redis, { type RedisOptions } from 'ioredis'

const { REDIS_HOST, REDIS_PASSWORD, REDIS_PORT } = process.env

const redisConfig: RedisOptions = {
    host: REDIS_HOST,
    port: +REDIS_PORT,
    password: REDIS_PASSWORD,
}

const RedisInstance = new Redis(redisConfig)

RedisInstance.on('connect', () => {
    Logger.log('Redis connected')
})


export {
    RedisInstance
}

