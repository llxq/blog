import { login } from '@/lib/actions/login'
import { Auth, sendResponseJson } from '@/lib/utils/server'

export const POST = Auth(async (request: Request) => {
    const body = await request.json()
    const { account, password } = body
    try {
        const data = await login(account, password)
        if (!data) {
            return sendResponseJson(false, '账号或密码错误', 500)
        }
        return sendResponseJson(data, '登录成功', 200)
    } catch (error: string | any) {
        return sendResponseJson(false, error, 500)
    }
})