import { InjectModel } from '@/lib/db/utils'
import { DataTypes, Model, Optional } from 'sequelize'

interface IBlock {
    id: number
    // user id
    blockerId: string
    blockedId: string
}

@InjectModel<Block>({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    blockerId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    blockedId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    tableName: 'follow_requests',
})
export class Block extends Model<IBlock, Optional<IBlock, 'id'>> implements IBlock {
    public id!: number
    public blockerId!: string
    public blockedId!: string
}
