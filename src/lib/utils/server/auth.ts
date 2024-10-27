import { sendResponseJson } from '@/lib/utils/server/serverResponse'
import jwt from 'jsonwebtoken'
import { NextRequest } from 'next/server'

/**
 * 生成token
 * @param userId 通过 userId 获取 token
 * @returns token
 */
export const generateToken = async (userId: string) => {
    try {
        return jwt.sign({ userId, }, process.env.JWT_SECRET_KEY, { expiresIn: '2h', })
    } catch (error) {
        return Promise.reject(error)
    }
}

export const authenticateToken = async (token: string) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY) as { userId: string, iat: number, exp: number }
        // 判断是否过期
        if (decoded.exp < performance.now() / 1000) {
            return Promise.reject('登录信息已过期')
        }
        return Promise.resolve(decoded.userId)
    } catch (error) {
        return Promise.reject(error)
    }
}

export const getParseToken = (token: string) => {
    // `Bearer ${token}`
    return token.split('Bearer ')[1]
}

/**
 * directives to auth
 */
export const Auth = <T extends (...args: any) => any>(originFunction: T) => {
    return async function (this: any, res: NextRequest, ...args: any) {
        const token = res.headers.get('Authorization')
        let userId = ''
        if (token) {
            // 判断用户信息是否过期
            try {
                userId = await authenticateToken(getParseToken(token))
            } catch (error) {
                return sendResponseJson(false, '登录信息已过期', 401)
            }
            
        } else {
            return sendResponseJson(false, '未登录', 401)
        }
        return originFunction.apply(this, [res, ...args, userId, ])
    }
}