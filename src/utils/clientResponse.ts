import { NextResponse } from 'next/server'

export const sendResponseJson = (data: any, message = '', code = 200) => {
    return NextResponse.json({
        data,
        code,
        message,
    })
}