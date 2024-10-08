import jwt from 'jsonwebtoken'
import { NextRequest } from 'next/server'

/**
 * 生成token
 * @param userId 通过 userId 获取 token
 * @returns token
 */
export const generateToken = (userId: string) => {
    return jwt.sign(userId, process.env.JWT_SECRET_KEY, { expiresIn: '2h' })
}

export const authenticateToken = (token: string) => {
    return jwt.verify(token, process.env.JWT_SECRET_KEY)
}

/**
 * directives to auth
 */
export const Auth = <T extends Function>(originFunction: T) => {
    return function (this: any, res: NextRequest, ...args: any) {
        const token = res.headers.get('Authorization')
        if (token) {
            const userInfo = authenticateToken(token)
        } else {
            // return sendResponseJson(false, '未登录', 401)
        }
        return originFunction.apply(this, [res, ...args])
    }
}