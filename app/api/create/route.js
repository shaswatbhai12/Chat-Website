import { StreamChat } from "stream-chat"
import { clerkClient } from "@clerk/nextjs/server"

const api_key = process.env.NEXT_PUBLIC_STREAM_API_KEY
const api_secret = process.env.STREAM_SECRET


export async function POST(request) {
    const serverClient = StreamChat.getInstance(api_key, api_secret)
    const user = await request.json()

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const token = serverClient.createToken(user.data.id)
    console.log("A NEW USER HAS BEEN CREATED", token)
    const client = await clerkClient()
    await serverClient.upsertUser({ id: user.data.id})

    await client.users.updateUserMetadata(user.data.id, {
        publicMetadata:{
            token: token
        },
    })

    const slugs = ["python-new-1", "javascript-new-1", "react-new-1", "css-new-1", "web-new-1"]
    slugs.forEach(async (item) => {
        const channel = serverClient.channel('messaging', item, {
            image: 'https://getstream.io/random_png/?name=react',
            name: capitalize(item) + " Discussion",
            created_by_id: user.data.id
        })
        await channel.create()
        channel.addMembers([user.data.id])
    });
    return Response.json({ message: 'Hello World'})
}