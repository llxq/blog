import { InjectModel } from '@/lib/db/utils'
import { DataTypes, Model, Optional } from 'sequelize'

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
}

@InjectModel<User>({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        comment: '用户id',
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: '用户名',
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '密码',
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        comment: '邮箱',
    },
    avatar: DataTypes.STRING,
    cover: DataTypes.STRING,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    description: DataTypes.STRING,
    city: DataTypes.STRING,
    school: DataTypes.STRING,
    work: DataTypes.STRING,
    website: DataTypes.STRING,
}, {
    tableName: 'users',
})
export class User extends Model<IUser, Optional<IUser, 'id'>> implements IUser {
    public id!: string
    public username!: string
    public password!: string
    public email?: string
    public avatar?: string
    public cover?: string
    public name?: string
    public surname?: string
    public description?: string
    public city?: string
    public school?: string
    public work?: string
    public website?: string
}
