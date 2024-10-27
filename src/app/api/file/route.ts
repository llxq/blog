import { FILE_CONFIG } from '@/lib/configs/fileConfig'
import { Files } from '@/lib/db/models'
import { UploadFileTypeEnum } from '@/lib/enum/UploadFileTypeEnum'
import { MinioClient } from '@/lib/store/service'
import { getCurrentTime } from '@/lib/utils'
import { sendResponseJson } from '@/lib/utils/server'
import { NextRequest } from 'next/server'
import { v4 } from 'uuid'

export const POST = async (req: NextRequest) => {
    try {
        // 使用 form.parse 解析表单数据和文件
        const data = await req.formData()
        const file = data.get('file') as File
        const type = data.get('type') as UploadFileTypeEnum || UploadFileTypeEnum.POST
        const typeDir = Reflect.get(FILE_CONFIG, type) as string || ''
        const arrayBuffer = await file.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)
        const filePath = `${ typeDir }${ getCurrentTime() }${ file.name }`
        const fileName = file.name
        const { etag, } = await MinioClient.uploadFile({ name: filePath, stream: buffer, size: file.size, mimetype: file.type, })
        const { dataValues: { id, }, } = await Files.create({ id: v4(), path: filePath, etag, file_name: fileName, })
        return sendResponseJson({ id, }, '上传成功', 200)
    } catch (error) {
        console.error('Error handling form data:', error)
        return sendResponseJson(false, '上传失败', 500)
    }
}
