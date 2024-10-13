import { type IClientUser, User } from '@/lib/db/models'
import { col } from 'sequelize'

/**
 * 根据用户id查抄用户信息
 * @param id 用户id
 * @returns 返回用户信息
 */
export const findUserById = async (id: string): Promise<IClientUser> => {
    const userDto = await User.findOne({
        where: { id, },
        attributes: [[col('id'), 'userId',], 'username', 'email', 'avatar', 'cover', 'name', 'surname', 'description', 'city', 'school', 'work', 'website',],
    })

    if (!userDto?.dataValues) {
        return Promise.reject('用户不存在！')
    }

    return userDto as unknown as IClientUser
}