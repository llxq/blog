import { IUser } from '@/lib/db/models'
import { rsaDecrypt } from '@/lib/utils/server'

export const createUser = async (userInfo: IUser) => {
    // const { email } = userInfo
    // if (email) {
    //     // 邮箱校验
    //     const data = await User.findOne({ where: { email: userInfo.email } })
    //     if (data) {
    //         return Promise.reject('该邮箱已被注册')
    //     }
    // }
    console.log(userInfo, '???')
    const { password } = userInfo
    console.log(password, '加密前的password')
    const data = rsaDecrypt(password)
    console.log(data, '解密的password')
    return userInfo
    // return await User.create({...userInfo, id: uuid()})
}