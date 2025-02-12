"use client"
import { useState } from "react";

const FrameXPage = () => {

    const [username, setUsername] = useState("justayushtomar")
    const [name, setName] = useState("Ayush Tomar")
    const [content, setContent] = useState("Text Content")
    const [reply, setReply] = useState(0)
    const [reposts, setReposts] = useState(0)
    const [likes, setLikes] = useState(0)
    const [view, setView] = useState(0)


    return ( 
        <div>
            <div className="flex flex-col items-center justify-center h-screen">

                <div className="bg-white w-[400px] p-4 flex flex-col gap-3 rounded-lg">
                    <div className="flex items-center gap-4">
                        <div className="size-12 rounded-full bg-neutral-300"/>
                        <div className="flex flex-col ">
                            <p className="text-lg font-bold text-neutral-900">{name}</p>
                            <p className="text-neutral-500">@{username}</p>
                        </div>
                        <div>
                        </div>
                    </div>
                    <p className="text-neutral-900">
                        {content}
                    </p>

                    <ul className="flex gap-2 justify-between text-neutral-400">
                        <li>{reply} Reply</li>
                        <li>{reposts} Reposts</li>
                        <li>{likes} Likes</li>
                        <li>{view} View</li>
                    </ul>

                </div>

            </div>

            {/* Toolbar */}
            <div className="absolute bottom-4 w-full">
                <div className="w-fit bg-neutral-900 border border-neutral-700 rounded-xl p-3 mx-auto flex justify-between space-x-8">
                    
                    <div className="space-y-2">
                        <div className="flex gap-2 items-center justify-between">
                            <span className="mr-2 text-nowrap">Name</span>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="bg-neutral-800 py-1 px-2 rounded  appearance-none focus:outline-none" />
                        </div>

                        <div className="flex gap-2 items-center justify-between">
                            <span className="mr-2 text-nowrap">Username</span>
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="bg-neutral-800 py-1 px-2 rounded appearance-none focus:outline-none" />                        </div>
                 
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="mr-2 text-nowrap">Text content</span>
                        <textarea className="bg-neutral-800 rounded p-2 h-10  appearance-none focus:outline-none" rows={4} cols={20} value={content} onChange={(e) => setContent(e.target.value)}/>
                    </div>


                    <div className="grid grid-cols-2 gap-2">

                        <div className="flex gap-2 items-center justify-between">
                            <span className="mr-2 text-nowrap">Likes</span>
                            <input type="number" min={0} value={likes} onChange={(e) => setLikes(Number(e.target.value))} className="bg-neutral-800 py-1 px-2 rounded w-16 appearance-none focus:outline-none" />
                        </div>
                        <div className="flex gap-2 items-center justify-between">
                            <span className="mr-2 text-nowrap">View</span>
                            <input type="number" min={0} value={view} onChange={(e) => setView(Number(e.target.value))} className="bg-neutral-800 py-1 px-2 rounded w-16  appearance-none focus:outline-none" />
                        </div>
                        <div className="flex gap-2 items-center justify-between">
                            <span className="mr-2 text-nowrap">Reply</span>
                            <input type="number" min={0} value={reply} onChange={(e) => setReply(Number(e.target.value))} className="bg-neutral-800 py-1 px-2 rounded w-16  appearance-none focus:outline-none" />
                        </div>
                        <div className="flex gap-2 items-center justify-between">
                            <span className="mr-2 text-nowrap">Reposts</span>
                            <input type="number" min={0} value={reposts} onChange={(e) => setReposts(Number(e.target.value))} className="bg-neutral-800 py-1 px-2 rounded w-16  appearance-none focus:outline-none" />
                        </div>
                    </div>
                </div>
            </div>


            {/* <XProfileViewer/> */}
        </div>
     );
}
 
export default FrameXPage;