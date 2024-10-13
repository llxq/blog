import { User } from '@/lib/db/models'
import { generateToken, rsaDecrypt } from '@/lib/utils/server'
import { compareEncryptData } from '@/lib/utils/server/encrypt'
import { col, Op } from 'sequelize'

export const login = async (account: string, password: string) => {
    // 验证账号密码 select * from users where username = account or email = account
    const data = await User.findOne({
        where: {
            [Op.or]: [
                { username: account, },
                { email: account, },
            ],
        },
        // FIXME userId 不想改了。。所以查询的时候加个别名
        attributes: [[col('id'), 'userId',], 'password', 'avatar', 'username',],
    })
    if (!data?.dataValues) {
        return Promise.reject('账号不存在，请检查用户名或邮箱')
    }
    const rsaPassword = rsaDecrypt(password)
    // 校验密码
    const result = await compareEncryptData(rsaPassword, data.password)
    if (!result) {
        return Promise.reject('账号或密码错误')
    }
    const { userId, password: _, ...userInfo } = data.dataValues as User & { userId: string }
    // 生成token
    const token = await generateToken(userId)
    return { token, ...userInfo, userId, }
}
