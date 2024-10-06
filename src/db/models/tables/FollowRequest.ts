import { InjectModel } from '@/db/utils'
import { DataTypes, Model, Optional } from 'sequelize'

interface IFollowRequest {
    id: number
    // user id
    sendId: string
    receiveId: string
}

@InjectModel<FollowRequest>({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    sendId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    receiveId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    tableName: 'follow_requests',
})
export class FollowRequest extends Model<IFollowRequest, Optional<IFollowRequest, 'id'>> implements IFollowRequest {
    public id!: number
    public sendId!: string
    public receiveId!: string
}
