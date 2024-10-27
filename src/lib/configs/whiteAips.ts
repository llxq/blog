// 白名单
export const whiteApis: Array<string | RegExp> = [/^\/api\/public\/*/,]

/**
 * 判断是否为白名单
 * @param url 
 * @returns 
 */
export const isWhiteApi = (url: string) => {
    // 允许以 /api/public 开头的接口不需要鉴权
    return whiteApis.some(item => {
        if (typeof item === 'string') {
            return url.startsWith(item)
        } else {
            return item.test(url)
        }
    })
}