import { db } from '@/db/mySqlConnect'
import { NextRequest, NextResponse } from 'next/server'

export async function POST (request: NextRequest) {
    const { id, } = await request.json()
    const [result, metadata,] = await db.query(`SELECT name FROM blog.user WHERE id = ${ id }`)
    console.log(result, metadata)
    return NextResponse.json({
        data: result,
    }, { status: 200, })
}