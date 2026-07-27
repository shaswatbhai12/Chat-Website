"use client"
immpo
import { Chat, useCreateChatClient } from 'stream-chat-react'

const apiKey = 'dz5f4d5kzrue'
const userId = 'shiny-violet-3'
const userName = 'shiny'
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoic2hpbnktdmlvbGV0LTMiLCJleHAiOjE3ODUwNjgzODF9.ckG_4Xe89PyzfPL6ODxQUjqH4jAtSJZlvq8NYgQzVIg'

export default function ChatForum( ) {
    const client = useCreateChatClient({
        apiKey,
        tokenOrProvider: userToken,
        userData: { id: userId },
    });
    if(!client) return <div>Setting up Client and Connection...</div>;

    return(
        <Chat client={client}>
            <Channel channel={channel}>
                <Window>
                    <ChannelHeader/>
                    <MessageList/>
                    <MessageInput/>
                </Window>
                <Thread/>
            </Channel>
        </Chat>
    )
}