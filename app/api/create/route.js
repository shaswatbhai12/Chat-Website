import { StreamChat } from "stream-chat";

const api_key = process.env.NEXT_PUBLIC_STREAM_API_KEY
const api_secret = process.env.STREAM_SECRET
// const user_id = "user_3GiolntMrE3jGanR1i5PcaFJQb7";

export async function POST(request) {
    const serverClient = StreamChat.getInstance(api_key, api_secret);

    const user = await request.json()
    const token = serverClient.createToken(user.data.id);
    console.log("A NEW USER HAS BEEN CREATED")
    return Response.json({ message: 'Hello World'})
}