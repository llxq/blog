import { InjectModel } from '@/lib/db/utils'
import { DataTypes, Model, Optional } from 'sequelize'

interface IStory {
    id: number
    expiresAt: Date
    userId: string
}

@InjectModel<Story>({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    expiresAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    tableName: 'follow_requests',
})
export class Story extends Model<IStory, Optional<IStory, 'id'>> implements IStory {
    public id!: number
    public userId!: string
    public expiresAt!: Date
}
