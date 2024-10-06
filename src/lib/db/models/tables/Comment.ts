import { InjectModel } from '@/lib/db/utils'
import { DataTypes, Model, Optional } from 'sequelize'

interface IComment {
    id: number
    desc: string
    // 用于关联用户表
    userId: string
}

@InjectModel<Comment>({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    desc: DataTypes.STRING,
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'comments',
})
export class Comment extends Model<IComment, Optional<IComment, 'id'>> implements IComment {
    public id!: number
    public desc!: string
    public userId!: string
}
