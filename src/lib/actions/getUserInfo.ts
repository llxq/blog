import { findPostCountByUser } from '@/lib/actions/findPostByUser'
import { findUserById } from '@/lib/actions/findUserById'
import { Follower } from '@/lib/db/models'
import { fn, literal } from 'sequelize'
import { validate } from 'uuid'

export const getOtherUserInfo = async (userId: string) => {
    // 获取帖子数量
    const postCount = await findPostCountByUser(userId)

    /**
     * SELECT 
        COUNT(CASE WHEN followingId = 'xxx' THEN 1 END) AS followCount,
        COUNT(CASE WHEN followerId = 'xxx' THEN 1 END) AS followerCount
       FROM 
        blog.followers;
     */

    const data = await Follower.findOne({
        attributes: [
            // followingId 关注的人的id。查询关注人的id就是查询粉丝的id
            [fn('COUNT', literal(`CASE WHEN followingId = '${ userId }' THEN 1 END`)), 'followerCount',],
            [fn('COUNT', literal(`CASE WHEN followerId = '${ userId }' THEN 1 END`)), 'followCount',],
        ],
    })

    const followerInfo = (data?.dataValues ?? {}) as { followCount: number, followerCount: number }

    return {
        postCount,
        followCount: followerInfo?.followCount || 0,
        followerCount: followerInfo?.followerCount || 0,
    }
}

export const getUserInfo = async (userId: string) => {
    if (!validate(userId)) {
        return Promise.reject('无效的用户id')
    }
    const user = await findUserById(userId)
    
    const otherUserInfo = await getOtherUserInfo(userId)

    return {
        ...user,
        ...otherUserInfo,
    }
}