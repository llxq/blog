import os from 'os'

/**
 * 拿到当前的ip地址。测试环境使用
 */
export const getIpAddress = () => {
    const networkInterfaces = os.networkInterfaces()
    const keys = Object.keys(networkInterfaces),
        length = keys.length
    for (let i = 0; i < length; ++i) {
        const key = keys[i],
            addressInfo = networkInterfaces[key]
        if (addressInfo) {
            const addressInfoLength = addressInfo.length
            for (let j = 0; j < addressInfoLength; ++j) {
                const address = addressInfo[j]
                if (address.family === 'IPv4' && !address.internal) {
                    return address.address
                }
            }
        }
    }

    return 'localhost'
}
