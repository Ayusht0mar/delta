"use client"

import useStore from "@/store";
import {codeSnippets} from "@/types/CodeshotsOptions";
import hljs from "highlight.js";
import { useEffect } from "react";
import Editor from "react-simple-code-editor";

const handleSelect = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {
        target.select();
    }
};


export default function CodeEditor() {
    
    const store = useStore();

    useEffect(() => {
        const randomSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        useStore.setState(randomSnippet);
    }, []);


//     useEffect(() => {
//     if (store.autoDetectLanguage) {
//         let { language } = flourite(store.code);
//         useStore.setState({ language: language.toLowerCase() || "css" });
//     }
// }, [store.code, store.autoDetectLanguage]);


    return (
        <div 
            className={`min-w-[400px] border-2 rounded-xl shadow-2xl bg-black/75 border-neutral-600/40 ${store.darkMode ? "bg-black/75 border-neutral-600/40" : "bg-white/75 border-neutral-200/40"}`}
        >
            <header className="grid grid-cols-6 gap-3 items-center px-4 py-3 ">
                <div className="flex gap-1.5">
                    <div className="size-3 rounded-full bg-red-500" />
                    <div className="size-3 rounded-full bg-yellow-500" />
                    <div className="size-3 rounded-full bg-green-500" />
                </div>
                <div className="col-span-4 flex justify-center">
                    <input 
                        type="text" 
                        value={store.title}
                        onChange={e => useStore.setState({ title: e.currentTarget.value})}
                        spellCheck={false}
                        onClick={(e) => e.currentTarget.select()}
                        className={`bg-transparent text-center text-sm font-medium focus:outline-none ${store.darkMode ? "text-neutral-200" : "text-neutral-900"}`} />
                </div>
            </header>
            <div className={`px-4 pb-4 ${store.darkMode ? "brightness-110" : "text-neutral-800 brightness-50 saturate-200 contrast-200"}`}>
                <Editor
                    value={store.code}
                    onValueChange={code => useStore.setState({code})}
                    highlight={code => hljs.highlight(store.language, code).value}

                    style={{
                        fontSize: store.fontSize,
                        fontFamily: store.fontStyle,
                    }}
                    textareaClassName="focus:outline-none"
                    onClick={handleSelect}

                />
            </div>        
        </div>
     );
}
 
