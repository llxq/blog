import { RedisInstance } from '@/lib/store/service/Redis'

interface IServiceUserInfo {
    /* 用户名 */
    username: string
    /* token */
    token: string
    /* 用户id */
    userId: string
    /* 头像 */
    avatar?: string
    // 过期时间 （暂时不依赖于 redis 的过期时间）
    expiresAt: number
}

class ServiceUserInfo {
    public async get (token: string): Promise<Nullable<IServiceUserInfo>> {
        const userInfo = await RedisInstance.get(token)
        if (!userInfo) {
            return null
        }
        try {
            return JSON.parse(userInfo) as IServiceUserInfo
        } catch (error) {
            return null
        }
    }

    public async set (token: string, userInfo: IServiceUserInfo) {
        const { userId, } = userInfo
        RedisInstance.set(userId, token)
        return RedisInstance.set(token, JSON.stringify(userInfo))
    }

    public async del (token: string) {
        const userInfo = await this.get(token)
        if (userInfo) {
            RedisInstance.del(userInfo.userId)
        }
        return RedisInstance.del(token)
    }
}


export const serviceUserInfo = new ServiceUserInfo()