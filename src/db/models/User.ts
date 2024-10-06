import { Model, Optional } from 'sequelize'

interface IUser {
    // user id
    id: string
    username: string
    // 头像
    avatar: string
    cover: string
    name: string
    surname: string
    description: string
    city: string
    school: string
    work: string
    website: string
}

export class User extends Model<IUser, Optional<IUser, 'id'>> implements IUser {
    public id!: string
    public username!: string
    public avatar!: string
    public cover!: string
    public name!: string
    public surname!: string
    public description!: string
    public city!: string
    public school!: string
    public work!: string
    public website!: string
}