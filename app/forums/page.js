import React from "react";
import Image from "next/image";
import Link from "next/link"
import { Button } from "@/components/ui/button"

const topics = [
    {
    text: "Python",
    img: "/python.svg",
    desc: "Let's Discuss everything related to Python",
    slug: "python-discuss"
    },
    {
    text: "Javascript",
    img: "/javascript.png",
    desc: "Learn and share JavaScript Knowledge",
    slug: "js-discuss"

    },
    {
    text: "React",
    img: "/react.png",
    desc: "Build amazing User Interface with react",
    slug: "react-discuss"
    },
    {
    text: "CSS",
    img: "/css.png",
    desc: "Explore the word of designing and CSS",
    slug: "css-discuss"
    },
    {
    text: "Web Development",
    img: "/html.png",
    desc: "Discuss Front end, Back-end, and full stack web development",
    slug: "web-discuss"
    },
]

const Forums = () => {
    return(
        <div className="min-h-screen bg-[#f8fafc] py-20 px-6 font-sans">
            <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl text-center font-extrabold text-slate-900 mb-16 tracking-tight">Discussion Forums</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
                {topics.map((topic)=>{
                    return <div key={topic.text} className=" bg-[#e9ecef]/80 p-8 rounded-2xl shadow-sm flex flex-col items-center text-center justify-between min-h-[280px]">
                        <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-sm mb-4"><Image src={topic.img} width={64} height={64} alt={topic.text} className="object-contain w-full h-full"/></div>
                        <div className="mb-6"><h2 className="text-xl font-bold text-slate-900 mb-2">{topic.text}</h2>
                        <p className="text-slate-600 text-xs md:text-sm max-w-xs leading-relaxed">{topic.desc}</p></div>
                        <Link href={`/forum/${topic.slug}`}>
                        <Button className="bg-slate-100/80 hover:bg-slate-200/80 text-slate-800 text-xs font-medium py-2 px-5 rounded-md border border-slate-300/60 transition duration-200">Discuss now</Button>
                        </Link>
                        </div>
                })}
            </div>
        </div>
        </div>
    )
}

export default Forums;