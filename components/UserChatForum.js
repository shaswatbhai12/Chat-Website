"use client"
import React, {useEffect, useState} from "react"
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageComposer, MessageList, Thread, Window } from "stream-chat-react"

import 'stream-chat-react/dist/css/index.css'

const UserChatForum = ({ clerkUser, targetUserId }) => {
    const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY
    const userID = clerkUser.id
    const userName = clerkUser.name
    const userToken = clerkUser.token

    const user ={
        id: userID,
        name: userName,
        image: `https://getstream.io/random_png/?name=${userName}`
    }

    const [channel, setChannel] = useState(null)

    const client = useCreateChatClient({
        apiKey,
        tokenOrProvider: userToken,
        userData: user
    });

    useEffect(() => {
        if(!client || !targetUserId || targetUserId === 'undefined') return

        const createChannel = async () => {
            try {
                const channelInstance = client.channel("messaging", {
                    members: [userID, targetUserId]
                });

                await channelInstance.watch()
                setChannel(channelInstance)
            } catch(err) {
                console.error("Error opening Direct Chat", err)
            }
        }

        createChannel();

        return () => {
            setChannel(null)
        }
    },[client, targetUserId, userID])

    if(userID === targetUserId){
        return(
            <div className="p-8 text-center text-slate-600">
                You cannot message yourself
            </div>
        )
    }

    if (!client) {
        return <div>Connecting to Chat...</div>
    }

    if (!channel) {
        return <div>Loading Conversations...</div>
    }

    return(
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

export default UserChatForum