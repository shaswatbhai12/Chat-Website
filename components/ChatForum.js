"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageComposer, MessageList, Thread, Window } from 'stream-chat-react'

import 'stream-chat-react/dist/css/index.css'

function capatalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}

const ChatForum = ({ clerkUser, slug }) => {
    const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY
    const userId = clerkUser.id
    const userName = clerkUser.name
    const userToken = clerkUser.token       
    
    const user = {
        id: userId,
        name: userName,
        image: `https://getstream.io/random_png/?name=${userName}`
    };
    const [channel, setChannel] = useState()
    const client = useCreateChatClient({
        apiKey,
        tokenOrProvider: userToken,
        userData: user,
    });

    useEffect(()=>{
        if(!client) return

        const channel = client.channel('messaging', slug, {
            image: 'https://getstream.io/random_png/?name=react',
            name: capatalize(slug) + ' Discussion',
            members: [userId],
        })

        setChannel(channel)
    }, [client])

    if (!client) return <div>Setting up client & connection ...</div>
return (
    <div>
      <Chat client={client}>
        <Channel channel={channel}>
            <Window>
                <ChannelHeader />
                <MessageList />
                <MessageComposer />
            </Window>
            <Thread />
        </Channel>
      </Chat>
    </div>
  )
}

export default ChatForum
