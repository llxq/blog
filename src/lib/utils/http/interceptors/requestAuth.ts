import { isWhiteApi } from '@/lib/configs/whiteAips'
import { clientStore } from '@/lib/store/client'
import { getAuthHeader } from '@/lib/store/client/userInfo'
import { logOut } from '@/lib/utils/client'
import type { IInterceptor } from '@/lib/utils/http/interceptors/index'
import type { InternalAxiosRequestConfig } from 'axios'


export const requestAuth: IInterceptor<InternalAxiosRequestConfig> = {
    onFulfilled: (config: InternalAxiosRequestConfig) => {
        const { token, } = clientStore.getState().userInfo
        if (token) {
            if (!Reflect.has(config, 'headers')) {
                Reflect.set(config, 'headers', {})
            }
            Object.assign(config.headers, getAuthHeader(token))
        } else {
            if (!config.url || !isWhiteApi(config.url)) {
                logOut()
            }
        }
        return config
    },
    onRejected: (error) => {
        return Promise.reject(error)
    },
}
