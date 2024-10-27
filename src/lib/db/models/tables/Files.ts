import { InjectModel } from '@/lib/db/utils'
import { DataTypes, Model, Optional } from 'sequelize'

export interface IFiles {
    id: string
    /* 文件路径 */
    path: string
    // etag: string
    etag: string
    // file_name
    file_name?: string
}

@InjectModel<Files>({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
        allowNull: false,
    },
    path: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    etag: DataTypes.STRING,
    file_name: DataTypes.STRING,
}, {
    tableName: 'files',
})
export class Files extends Model<IFiles, Optional<IFiles, 'id'>> implements IFiles {
    public id!: string
    /* 文件路径 */
    public path!: string

    public etag!: string

    public file_name?: string
}
