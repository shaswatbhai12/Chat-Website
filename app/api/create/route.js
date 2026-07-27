import { StreamChat } from "stream-chat";

const api_key = process.env.NEXT_PUBLIC_STREAM_API_KEY
const api_secret = process.env.STREAM_SECRET
const user_id = "user_3GiolntMrE3jGanR1i5PcaFJQb7";

export async function GET() {
    const serverClient = StreamChat.getInstance(api_key, api_secret);

    const token = serverClient.createToken(user_id);
    console.log(token)
    return Response.json({ message: 'Hello World'})
}