import { Files } from '@/lib/db/models'
import { MinioClient } from '@/lib/store/service'
import { Auth, sendResponseJson } from '@/lib/utils/server'
import { NextRequest } from 'next/server'

/**
 * 获取文件（预览）
 * @constructor
 */
export const GET = Auth(async (_: NextRequest, { params , }) => {
    const { id, } = params 
    // 查找对应的path
    const file = await Files.findOne({
        where: { id, },
        attributes: ['path',],
    })
    if (!file?.dataValues) {
        return sendResponseJson(false, '文件不存在', 404)
    }
    // 获取对应的文件
    const bucketFile = await MinioClient.getPreviewUrl(file.dataValues.path)
    return sendResponseJson({ url: bucketFile, }, '资源获取成功', 200)
})
