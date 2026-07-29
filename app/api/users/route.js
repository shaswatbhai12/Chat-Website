import { clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(req){
    const {searchParams} = new URL(req.url);

    const search = searchParams.get("search")

    if (!search) {
        return NextResponse.json({
            users:[]
        });
    }

    const client = await clerkClient()

    const result = await client.users.getUserList({
        query: search
    });

    const users = result.data.map((user)=>({
        id: user.id,

        name: user.firstName || user.username || "User"
    }));

    return NextResponse.json({
        users
    });
}
