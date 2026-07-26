import { Chat, useCreateChatClient } from 'stream-chat-react'

const apiKey = ''
const userId = ''
const userName = ''
const userToken = ''

export default async function Page({ params }) {
    const client = useCreateChatClient({
        apiKey,
        tokenOrProvider: userToken,
        userData: { id: userId },
    });
    const slug = (await params).slug
    if(!client) return <div>Setting up Client and Connection</div>
    return 
}