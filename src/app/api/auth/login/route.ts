export async function POST (request: Request) {
    const body = await request.json()
    const { account, password } = body
}