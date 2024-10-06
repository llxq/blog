import { InjectModel } from '@/db/utils'
import { DataTypes, Model, Optional } from 'sequelize'

interface IFollower {
    id: number
    // user id
    followerId: string
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
    },
    followingId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'followers',
})
export class Follower extends Model<IFollower, Optional<IFollower, 'id'>> implements IFollower {
    public id!: number
    public followerId!: string
    public followingId!: string
}
