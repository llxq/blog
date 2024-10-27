import { InjectModel } from '@/lib/db/utils'
import { DataTypes, Model, Optional } from 'sequelize'

interface IFollower {
    id: number
    // 粉丝
    followerId: string
    // 粉丝
    followingId: string
}

@InjectModel<Follower>({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    followerId: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '粉丝',
    },
    followingId: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '被关注的人',
    },
}, {
    tableName: 'followers',
})
export class Follower extends Model<IFollower, Optional<IFollower, 'id'>> implements IFollower {
    public id!: number
    public followerId!: string
    public followingId!: string
}
