import type { AxiosResponse } from 'axios'
import type { IInterceptor } from '../interceptors/index'

export const responseInterceptor: IInterceptor<AxiosResponse> = {
    onFulfilled: (response) => {
        const { code, } = response.data
        const responseData = {
            ...response.data,
            code: code || response.status,
        }
        if (code === 401) {
            return Promise.reject(responseData)
        }
        return responseData
    },
    onRejected: (error) => {
        return Promise.reject(error)
    },
}
