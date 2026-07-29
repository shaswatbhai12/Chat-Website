"use client"
import React, {useEffect, useState} from "react"
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageComposer, MessageList, Thread, Window } from "stream-chat-react"

import 'stream-chat-react/dist/css/index.css'

const UserChatForum = ({ clerkUser, targetUserId }) => {
    const api_key = process.env.NEXT_PUBLIC_STREAM_API_KEY
    const userID = clerkUser.id
    const u
}