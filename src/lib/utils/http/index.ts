import axios from 'axios'
import { installInterceptors } from './interceptors/index'

const http = axios.create({
    /* 配置 5s 超时 */
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    },
})

/* 处理拦截起 */
installInterceptors(http)

export {
    http
}

