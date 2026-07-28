import ChatForum from "@/components/ChatForum"

export default async function Page({ params }) {
    const slug = (await params).slug
    return <ChatForum slug={slug} clerkUser={{ id: user.id, name: user.firstName, token: user.publicMetaData.token }}/>
}