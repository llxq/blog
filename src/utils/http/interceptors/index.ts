import { requestAuth } from './requestAuth'
import { responseInterceptor } from './responseInterceptor'
import type { AxiosInstance, AxiosInterceptorOptions,  InternalAxiosRequestConfig, AxiosResponse } from 'axios'

export interface IInterceptor<T> {
    onFulfilled?: ((_value: T) => T | Promise<T>) | null,
    onRejected?: ((_error: any) => any) | null,
    options?: AxiosInterceptorOptions
}

export const installInterceptors = (axiosInstance: AxiosInstance) => {
    const { request, response, } = axiosInstance.interceptors

    /* request 拦截器 */
    const requestInterceptors: Array<IInterceptor<InternalAxiosRequestConfig>> = [requestAuth,]

    requestInterceptors.forEach(requestInterceptor => {
        const { onFulfilled, onRejected, options, } = requestInterceptor
        request.use(onFulfilled, onRejected, options)
    })

    /* response 拦截器 */
    const responseInterceptors: Array<IInterceptor<AxiosResponse>> = [responseInterceptor,]

    responseInterceptors.forEach(responseInterceptor => {
        const { onFulfilled, onRejected, options, } = responseInterceptor
        response.use(onFulfilled, onRejected, options)
    })
}
