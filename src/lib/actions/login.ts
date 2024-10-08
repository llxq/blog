import { User } from '@/lib/db/models'
import { compareEncryptData } from '@/lib/utils/server/encrypt'
import { Op } from 'sequelize'

export const login = async (account: string, password: string) => {
    // 验证账号密码 select * from users where username = account or email = account
    const data = await User.findOne({
        where: {
            [Op.or]: [
                { username: account, },
                { email: account, }
            ]
        },
    })
    if (!data?.dataValues) {
        return null
    }
    // 校验密码
    console.log(password, data?.dataValues?.password, ']')
    const result = await compareEncryptData(password, data.password)
    console.log(result, '对比结果')
    return data?.dataValues ?? null
}