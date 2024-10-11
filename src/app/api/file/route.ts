import { MinioClient } from '@/lib/store/service'
import { Auth, sendResponseJson } from '@/lib/utils/server'
import { NextRequest } from 'next/server'

/**
 * 获取文件（预览）
 * @constructor
 */
export const GET = Auth(async (request: NextRequest) => {
    // 输出所有的🪣
    const files = await MinioClient.getPreviewUrl('熊猫谈钢琴.png')
    return sendResponseJson({
        files,
    }, '🪣获取成功', 200)
})

export const POST = Auth(async (request: NextRequest) => {
    const formData = await request.formData()
    if (!formData) {
        return sendResponseJson(false, '参数类型不对，请重试', 500)
    }
    const type = formData.get('type')
    return sendResponseJson({ type, }, '文件上传成功', 200)
})
