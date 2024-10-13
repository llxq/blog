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

export const authenticateToken = (token: string) => {
    return jwt.verify(token, process.env.JWT_SECRET_KEY)
}

export const getParseToken = (token: string) => {
    // `Bearer ${token}`
    return token.split('Bearer ')[1]
}

/**
 * directives to auth
 */
export const Auth = <T extends (...args: any) => any>(originFunction: T) => {
    return function (this: any, res: NextRequest, ...args: any) {
        const token = res.headers.get('Authorization')
        if (token) {
            const userInfo = authenticateToken(getParseToken(token))
        } else {
            // return sendResponseJson(false, '未登录', 401)
        }
        return originFunction.apply(this, [res, ...args,])
    }
}