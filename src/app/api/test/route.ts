import { sendResponseJson } from '@/utils/clientResponse'
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler (req: NextApiRequest, res: NextApiResponse) {
    console.log(1212122)
  if (req.method === 'POST') {
    // 处理 POST 请求
    return sendResponseJson(true, '请求成功');
  } else if (req.method === 'GET') {
    // 处理 GET 请求
    return sendResponseJson(true, 'GET 请求成功');
  } else {
    // 处理不支持的方法
    return sendResponseJson(false, '不支持的请求方法', 405);
  }
}
