import React from "react";
import Image from "next/image";

const topics = [
    {
    text: "Python",
    img: "/python.png",
    desc: "Let's Discuss everything related to Python"
    },
    {
    text: "Javascript",
    img: "/javascript.png",
    desc: "Learn and share JavaScript Knowledge"
    },
    {
    text: "React",
    img: "/react.png",
    desc: "Build amazing UI with react"
    },
    {
    text: "Node JS",
    img: "/nodejs.png",
    desc: "Develop server side application with node.js"
    },
    {
    text: "Data Science",
    img: "/data-science.png",
    desc: "Explore thhe world of Data Science and Machine Learning"
    },
    {
    text: "Web Development",
    img: "/web-development.png",
    desc: "Discuss Front end, Back-end, and full stack web development"
    },
]

const Forums = () => {
    return(
        <div className="container  mx-auto my-28">
            <h1 className="text-4xl text-center font-bold">Discussion Forms</h1>
            <div className="flex flex-wrap justify-center">
                {topics.map((topic)=>{
                    return <div key={topic.img} className="shadow-lg bg-slate-500 w-1/4 m-4 flex justify-center flex-col items-center py-10">
                        <Image src={topic.img} width={34} height={34} alt="Photo"/>
                        <h2 className="text-2xl">{topic.text}</h2>
                        <p>{topic.desc}</p>
                        <button>Discuss Now</button>
                        </div>
                })}
            </div>
        </div>
    )
}

export default Forums;