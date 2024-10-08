import bcrypt from 'bcrypt'

// 加盐次数
const saltRounds = 10

export const getEncryptData = async (data: string) => {
    return await bcrypt.hash(data, saltRounds)
}

export const compareEncryptData = async (data: string, encryptData: string) => {
    return await bcrypt.compare(data, encryptData)
}
