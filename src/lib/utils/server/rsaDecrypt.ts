import { JSEncrypt } from 'jsencrypt'

const encrypt = new JSEncrypt()
// 生成密钥对
const key = encrypt.getKey()
const publicKey = key.getPublicKey()  // 获取公钥
const privateKey = key.getPrivateKey() // 获取私钥

export const getDecryptPublicKey = () => publicKey

export const rsaDecrypt = (data: string): string => {
    const decrypt = new JSEncrypt()
    decrypt.setPrivateKey(privateKey)
    return decrypt.decrypt(data) || ''
}