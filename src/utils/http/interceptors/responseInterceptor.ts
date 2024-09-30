import type { IInterceptor } from '../interceptors/index'
import type { AxiosResponse } from 'axios'

export const responseInterceptor: IInterceptor<AxiosResponse> = {
    onFulfilled: (response) => {
        const { code, } = response.data
        if (code === 401) {
            return Promise.reject(response.data)
        }
        return response
    },
    onRejected: (error) => {
        return Promise.reject(error)
    },
}
