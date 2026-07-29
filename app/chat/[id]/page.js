import UserChatForum from "@/components/UserChatForum";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Page({ params }) {
    const user = await currentUser()

    if(!user) {
        redirect('/sign-in')
    }

    const { id: targetUserId } = await params;

    const clerkUser = {
        id: user.id,
        name: user.firstName || user.username || "User",
        token: user.publicMetadata?.token || ""
    }

    return <UserChatForum  clerkUser={clerkUser} targetUserId={targetUserId} />
}