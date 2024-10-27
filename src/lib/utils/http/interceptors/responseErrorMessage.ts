import { message } from 'antd'
import type { AxiosResponse } from 'axios'
import type { IInterceptor } from '../interceptors/index'

export const responseErrorMessage: IInterceptor<AxiosResponse> = {
    onFulfilled: response => {
        const { code, message: responseMessage, } = response
        if (+code !== 200) {
            message.error(responseMessage || '未知错误')
            return Promise.reject(response)
        }
        return response
    },
    onRejected: (error) => {
        message.error(typeof error === 'string' ? error : error?.message || '未知错误')
        return Promise.reject(error)
    },
}
