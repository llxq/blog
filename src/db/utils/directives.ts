import { initModel } from '@/db'
import { DataType, InitOptions, Model, ModelAttributeColumnOptions, ModelStatic } from 'sequelize'


/* eslint-disable no-unused-vars */
export const InjectModel = <M extends Model> (attributes: {
    [P in keyof M]?: DataType | ModelAttributeColumnOptions<M>
},options?: Partial<InitOptions>) => {
    return function (constructor: new () => M): void {
        initModel(constructor as any as ModelStatic<Model>, attributes, options)
    }
}

