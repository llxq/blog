import { IUser, User } from '@/lib/db/models'
import { rsaDecrypt } from '@/lib/utils/server'
import { getEncryptData } from '@/lib/utils/server/encrypt'
import { v4 } from 'uuid'

export const createUser = async (userInfo: IUser) => {
    const { email, password } = userInfo
    if (email) {
        // 邮箱校验
        const data = await User.findOne({ where: { email: userInfo.email } })
        if (data) {
            return Promise.reject('该邮箱已被注册')
        }
    }
    // 解密密码
    const rsaPassword = rsaDecrypt(password)
    console.log(rsaPassword, '123')
    // 加密存储
    const encryptPassword = await getEncryptData(rsaPassword)
    return await User.create({ ...userInfo, id: v4(), password: encryptPassword })
}