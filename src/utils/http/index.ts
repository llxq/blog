import { installInterceptors } from './interceptors/index'
import axios from 'axios'

const http = axios.create({
    /* 配置 5s 超时 */
    timeout: 5000,
})

/* 处理拦截起 */
installInterceptors(http)

export {
    http,
}
