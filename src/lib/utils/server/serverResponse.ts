import { NextResponse } from 'next/server'

export const sendResponseJson = (data: any, messageInfo: any = '', code = 200) => {
    const message = typeof messageInfo === 'string' ? messageInfo : messageInfo?.message
    return NextResponse.json({
        data,
        code,
        message,
    })
}