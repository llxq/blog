import { InjectModel } from '@/db/utils'
import { DataTypes, Model, Optional } from 'sequelize'

interface IPost {
    id: number
    desc: string
    img: string
    // 用于关联用户表
    userId: string
}

@InjectModel<Post>({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    desc: DataTypes.STRING,
    img: {
        type: DataTypes.STRING,
        comment: '图片地址，多个以逗号隔开',
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'posts',
})
export class Post extends Model<IPost, Optional<IPost, 'id'>> implements IPost {
    public id!: number
    public desc!: string
    public img!: string
    public userId!: string
}
