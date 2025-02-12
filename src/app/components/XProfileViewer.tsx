"use client"

import { useState } from "react"

import { themes } from "@/types/CodeshotsThemes";
import useStore from "@/store";


export default function XProfileViewer() {
  const [url, setUrl] = useState("")
  const [profile, setProfile] = useState<{ username: string; name?: string; avatar?: string } | null>(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [ background, setBackground ] = useState("f5f5f5")
  const [name , setName] = useState("Your Name")
  const [text, setText] = useState("Post Content")
  const [theme, setTheme] = useState<keyof typeof themes>("hyper");
  const [openThemeSelector, setOpenThemeSelector] = useState(false);
  const showBackground = useStore((state) => state.showBackground);



  const handleSubmit = async () => {
    setError("")
    setProfile(null)
    setLoading(true)

    if (!url.includes("twitter.com/") && !url.includes("x.com/")) {
      setError("Please enter a valid X (Twitter) profile URL")
      setLoading(false)
      return
    }

    try {
      const username = url.split("/").pop() || ""
      if (!username) {
        setError("Could not extract username from URL")
        setLoading(false)
        return
      }

      const response = await fetch(`/api/fetch-profile?username=${encodeURIComponent(username)}`)
      const data = await response.json()

      if (data.error) {
        setError(data.error)
      } else {
        setProfile(data)
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError("An unknown error occurred")
      }
    }

    setLoading(false)
  }

  return (
    <>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {profile && (
              <div className="flex h-screen justify-center items-center">
                <div className={`aspect-square rounded-xl flex justify-center items-center p-8  ${showBackground ? themes[theme] : ""}`} >
                    <div className={`flex flex-col gap-2 p-4 rounded-xl w-96`} style={{ backgroundColor: `#${background}` }}>
                      <div className="flex items-center gap-4">
                        <img
                          src={profile.avatar || `https://unavatar.io/twitter/${profile.username}`}
                          alt={`${profile.username}'s avatar`}
                          className="w-16 h-16 rounded-full"
                        />
                        <div>
                          {name && <h2 className="font-bold text-neutral-900">{name}</h2>}
                          <p className="text-gray-500">@{profile.username}</p>
                        </div>
                      </div>
                      <div className="text-neutral-900">
                        {text}
                      </div>
                    <div>
                      
                    
                    </div>
                    </div>
                </div>
              
              </div>
          )}

          <div className="absolute bottom-4 w-full">
            <div className="h-20 w-[600px] bg-neutral-900  border border-neutral-700 rounded-xl mx-auto p-2">

            <div className="flex space-x-2 mb-4">
              <input
                type="text"
                placeholder="Enter X profile URL (e.g., x.com/username)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 bg-transparent"
              />

              {/* themeselector */}

<div className="relative">
                  <button
                    onClick={() => setOpenThemeSelector(!openThemeSelector)}
                    className="p-2 bg-neutral-700 rounded text-white"
                  >
                    {theme}
                  </button>
                  {openThemeSelector && (
                    <div className="absolute bottom-0 mt-2 bg-neutral-800 rounded shadow-lg z-10">
                      <select
                        className="p-2 border rounded bg-neutral-700 text-white"
                        value={theme}
                        onChange={(e) => setTheme(e.target.value as keyof typeof themes)}
                      >
                        {Object.keys(themes).map((key) => (
                          <option key={key} value={key}>
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>

              <input type="text" value={background} onChange={(e) => setBackground(e.target.value)} className="flex-1 bg-transparent" />
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="flex-1 bg-transparent" />
              <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="flex-1 bg-transparent" />
              <button onClick={handleSubmit} disabled={loading}>
                {loading ? "Loading..." : "View"}
              </button>
            </div>
            </div>
          </div>

      
    </>
  )
}

