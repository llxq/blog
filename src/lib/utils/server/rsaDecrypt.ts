import NodeRSA from 'node-rsa'

const key = new NodeRSA({ b: 2048 }) // 生成一个2048位的RSA密钥对
const publicKey = key.exportKey('public')
const privateKey = key.exportKey('private')


export const getDecryptKey = () => {
    return {
        publicKey,
        privateKey
    }
}

export const rsaDecrypt = (data: string) => {
    try {
        const decryptedValue = key.decrypt(data, 'base64');
        console.log(decryptedValue, '解密后的数据')
        return decryptedValue
    } catch (error) {
        console.log(error)
    }
}