import { getDecryptPublicKey, sendResponseJson } from '@/lib/utils/server'

export const GET = async () => {
    return sendResponseJson(getDecryptPublicKey(), '获取公钥成功', 200)
}
