import 'axios'

declare module 'axios' {
  interface AxiosResponse<T = any, R = any> {
      code: number | string // 添加 code 属性
      data: T
      message: string
  }
}
