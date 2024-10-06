import 'axios'

declare module 'axios' {
  interface AxiosResponse<T = any, R = any> {
    code?: number; // 添加 code 属性
  }
}
