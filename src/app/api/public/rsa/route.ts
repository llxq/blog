import { getDecryptKey, sendResponseJson } from '@/lib/utils/server'

export async function GET () {
    const { publicKey } = getDecryptKey()
    return sendResponseJson(publicKey, '获取公钥成功', 200)
}