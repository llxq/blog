export interface IUser {
    // user id
    id: string
    username: string
    email?: string
    password: string
    // 头像
    avatar?: string
    cover?: string
    name?: string
    surname?: string
    description?: string
    city?: string
    school?: string
    work?: string
    website?: string
}

export interface IClientUser extends IUser {
    userId: string
    postCount: number
    // 粉丝数量
    followerCount: number
    // 关注数量
    followCount: number
}