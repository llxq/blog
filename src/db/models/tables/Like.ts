import { InjectModel } from '@/db/utils'
import { DataTypes, Model, Optional } from 'sequelize'

interface ILike {
    id: number
    userId: string
    postId: number
    commentId: number
}

@InjectModel<Like>({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    commentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    tableName: 'likes',
})
export class Like extends Model<ILike, Optional<ILike, 'id'>> implements ILike {
    public id!: number
    public userId!: string
    public postId!: number
    public commentId!: number
}
