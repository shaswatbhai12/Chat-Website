"use client"
import { useState, useEffect } from 'react';
import { Chat, useCreateChatClient, Channel, ChannelHeader, MessageComposer, MessageList, Thread, Window } from 'stream-chat-react'

import 'stream-chat-react/dist/css/index.css'

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY
const userId = 'user_3GiolntMrE3jGanR1i5PcaFJQb7'
const userName = 'Shaswat'
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoic3BhcmtsaW5nLXBpbmUtOCIsImV4cCI6MTc4NTE3NjM2N30.cMySICPJhLJqks6h3XFyU0oLOrboDexk798w3WGGeEQ'

const user = {
    id: userId,
    name: userName,
    image: `https://getstream.io/random_png/?name=${userName}`
}

export default function ChatForum( ) {
    const [channel, setChannel] = useState()
    const client = useCreateChatClient({
        apiKey,
        tokenOrProvider: userToken,
        userData: user,
    });

    useEffect(()=>{
        if(!client) return
        
        const channel = client.channel('messaging', 'custom_channel_id', {
            image: 'https://getstream.io/random_png/?name=react',
            name: 'Talk about React',
            members: [userId]
        });

        setChannel(channel);
    }, [client]);

    if(!client) return <div>Setting up Client and Connection...</div>;

    return(
        <Chat client={client}>
            <Channel channel={channel}>
                <Window>
                    <ChannelHeader/>
                    <MessageList/>
                    <MessageComposer/>
                </Window>
                <Thread/>
            </Channel>
        </Chat>
    )
}