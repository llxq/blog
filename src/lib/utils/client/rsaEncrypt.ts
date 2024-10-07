import { http } from '@/lib/utils/http'
import JSEncrypt from 'jsencrypt'

/**
 * rsa加密
 * @param data 加密数据
 * @returns 返回rsa加密数据
 */
export const rsaEncrypt = async (data: string) => {
    const encrypt = new JSEncrypt()
    const { data: publicKey } = await http.get('/api/public/rsa')
    encrypt.setPublicKey(publicKey)
    return encrypt.encrypt(data)
}