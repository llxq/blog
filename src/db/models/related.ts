import { Block } from '@/db/models/tables/Block'
import { Comment } from '@/db/models/tables/Comment'
import { Follower } from '@/db/models/tables/Follower'
import { FollowRequest } from '@/db/models/tables/FollowRequest'
import { Like } from '@/db/models/tables/Like'
import { Post } from '@/db/models/tables/Post'
import { Story } from '@/db/models/tables/Story'
import { User } from '@/db/models/tables/User'

// 一个user对应多个post，用 userId 关联
User.hasMany(Post, { foreignKey: 'userId', onDelete: 'CASCADE', })
// 一个post对应一个user，用 postId 关联
Post.belongsTo(User, { foreignKey: 'userId', })

// 每个user有多个like
User.hasMany(Like, { foreignKey: 'userId', onDelete: 'CASCADE', })
// like 属于一个 user
Like.belongsTo(User, { foreignKey: 'userId', })

// 每个post有多个like
Post.hasMany(Like, { foreignKey: 'postId', onDelete: 'CASCADE', })
// like 属于一个 post
Like.belongsTo(Post, { foreignKey: 'postId', })

// 一个user有多个comment
User.hasMany(Comment, { foreignKey: 'userId', onDelete: 'CASCADE', })
// comment 属于一个 user
Comment.belongsTo(User, { foreignKey: 'userId', })

// 一个post有多个comment
Post.hasMany(Comment, { foreignKey: 'postId', onDelete: 'CASCADE', })
// comment 属于一个 post
Comment.belongsTo(Post, { foreignKey: 'postId', })

// 一个comment有多个like
Comment.hasMany(Like, { foreignKey: 'commentId', onDelete: 'CASCADE', })
// like 属于一个 comment
Like.belongsTo(Comment, { foreignKey: 'commentId', })

// 设置 User 和 Follower 的多对多关系
User.belongsToMany(User, {
    through: Follower, // 使用 Follower 作为中间表
    as: 'followers', // 设置别名
    foreignKey: 'followingId', // User 表中的 foreignKey
    otherKey: 'followerId', // 对应的外键
    onDelete: 'CASCADE', // 当用户被删除时，关联的关注关系也被删除
})
User.belongsToMany(User, {
    through: Follower,
    as: 'followings', // 给关系命名为 followings
    foreignKey: 'followerId',
    otherKey: 'followingId',
    onDelete: 'CASCADE',
})

// 设置 user 和 followRequest 的多对多关系
User.belongsToMany(User, {
    through: FollowRequest,
    as: 'sentFollowRequests',
    foreignKey: 'sendId',
    otherKey: 'receiveId',
    onDelete: 'CASCADE',
})
User.belongsToMany(User, {
    through: FollowRequest,
    as: 'receivedFollowRequests',
    foreignKey: 'receiveId',
    otherKey: 'sendId',
    onDelete: 'CASCADE',
})

// 设置 user 和 block 的多对多关系
User.belongsToMany(User, {
    through: Block,
    as: 'blocks',
    foreignKey: 'blockerId',
    otherKey: 'blockedId',
    onDelete: 'CASCADE',
})
User.belongsToMany(User, {
    through: Block,
    as: 'blockedUsers',
    foreignKey: 'blockedId',
    otherKey: 'blockerId',
    onDelete: 'CASCADE',
})

// 设置 user 和 story 的一对多关系
User.hasMany(Story, { foreignKey: 'userId', onDelete: 'CASCADE', })
Story.belongsTo(User, { foreignKey: 'userId', })