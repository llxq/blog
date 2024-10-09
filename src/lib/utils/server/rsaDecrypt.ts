import { JSEncrypt } from 'jsencrypt'

const encrypt = new JSEncrypt()
// 生成密钥对
const key = encrypt.getKey()
const publicKey = key.getPublicKey()  // 获取公钥

export const getDecryptPublicKey = () => {
    // @FIXME 为了解决在不同的 api 下去加载改文件都会重新执行一遍导致 key 对不上的问题
    Reflect.set(global, 'privateKey', key.getPrivateKey())
    return publicKey
}

export const rsaDecrypt = (data: string): string => {
    // @FIXME 为了解决在不同的 api 下去加载改文件都会重新执行一遍导致 key 对不上的问题
    const currentKey = Reflect.get(global, 'privateKey')
    const decrypt = new JSEncrypt()
    decrypt.setPrivateKey(currentKey)
    return decrypt.decrypt(data) || ''
}
