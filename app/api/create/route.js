import { StreamChat, streamChat } from "stream-chat"
import { clerkClient } from "@clerk/nextjs/server"

const api_key = process.env.NEXT_PUBLIC_STREAM_API_KEY
const api_secret = process.env.STREAM_SECRET

export async function POST(request) {
    const serverClient = StreamChat.getInstance(api_key, api_secret)
    const user = await request.json()

    const token = serverClient.createToken(user.data.id)
    console.log("A NEW USER HAS BEEN CREATED", token)
    const client = await clerkClient()

    await client.users.updateUserMetadata(user.data.id, {
        publicMetadata:{
            token: token
        },
    })
    return Response.json({ message: 'Hello World'})
}