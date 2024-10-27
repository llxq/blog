import { Post } from '@/lib/db/models'

export const findPostCountByUser = async (userId: string) => {
    return await Post.count({
        where: { userId, },
    })
}