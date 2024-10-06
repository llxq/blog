import { clientStore } from '@/lib/store/client'
import type { IInterceptor } from '@/lib/utils/http/interceptors/index'
import { logOut } from '@/lib/utils/logOut'
import type { InternalAxiosRequestConfig } from 'axios'

export const requestAuth: IInterceptor<InternalAxiosRequestConfig> = {
    onFulfilled: (config: InternalAxiosRequestConfig) => {
        const { token, } = clientStore.getState().userInfo
        if (token) {
            config.headers.Authorization = `Bearer ${ token }`
        } else {
            logOut()
        }
        return config
    },
    onRejected: (error) => {
        return Promise.reject(error)
    },
}
