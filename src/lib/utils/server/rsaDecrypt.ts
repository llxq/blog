import { JSEncrypt } from 'jsencrypt'

const encrypt = new JSEncrypt()

const privateKey = encrypt.getPrivateKey()
const publicKey = encrypt.getPublicKey()

export const getDecryptKey = () => {
    return {
        publicKey,
        privateKey
    }
}

export const rsaDecrypt = (data: string) => {
    const decrypt = new JSEncrypt()
    decrypt.setPrivateKey(privateKey)
    const decrypted = decrypt.decrypt(data)
    return decrypted
}