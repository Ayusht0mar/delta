"use client";

import CodeEditor from "@/components/codeshots/CodeEditor";
import ExportOptions from "@/components/codeshots/ExportOptions";

import useStore from "@/store";

import { fonts, languages } from "@/types/CodeshotsOptions";
import { themes } from "@/types/CodeshotsThemes";
import { useRef, useState } from "react";

const CodeShotsPage = () => {
  // const darkMode = useStore((state) => state.darkMode);
  const showBackground = useStore((state) => state.showBackground);
  // const fontSize = useStore((state) => state.fontSize);
  const fontStyle = useStore((state) => state.fontStyle as keyof typeof fonts);
  // const code = useStore((state) => state.code);
  // const title = useStore((state) => state.title);

  const editorRef = useRef<HTMLDivElement>(null);
  const store = useStore();

  const [theme, setTheme] = useState<keyof typeof themes>("hyper");
  const [language, setLanguage] = useState<keyof typeof languages>("html");
  const [padding, setPadding] = useState(64);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <link
        rel="stylesheet"
        href={fonts[fontStyle] ? fonts[fontStyle].src : "Inconsolata"}
        crossOrigin="anonymous"
      />

      <div
        className={`overflow-hidden transition-all ease-out ${
          showBackground ? themes[theme] : ""
        }`}
        style={{ padding }}
        ref={editorRef}
      >
        <CodeEditor />
      </div>

      {/* Toolbar */}
      <div className="absolute bottom-4 w-full">
        <div className="w-fit bg-neutral-900 border border-neutral-700 rounded-xl p-3 mx-auto flex justify-between">
          <div className="flex flex-col gap-2 w-fit my-auto">
            <div className="flex items-center justify-between">
              <span className="mr-2 text-nowrap">Dark mode</span>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  defaultChecked={store.showBackground}
                  onClick={() => useStore.setState({ darkMode: !store.darkMode })}
                  className="hidden"
                />
                <span className="relative">
                  <span className="block w-10 h-6 bg-neutral-700 rounded-full"></span>
                  <span
                    className="absolute top-1 left-1 w-4 h-4 bg-neutral-300 rounded-full transition-all duration-300 ease-in-out transform"
                    style={{
                      transform: store.darkMode
                        ? "translateX(1rem)"
                        : "translateX(0)",
                    }}
                  ></span>
                </span>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <span className="mr-2 text-nowrap">Show background</span>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  defaultChecked={store.showBackground}
                  onChange={() =>
                    useStore.setState({ showBackground: !store.showBackground })
                  }
                  className="hidden"
                />
                <span className="relative">
                  <span className="block w-10 h-6 bg-neutral-700 rounded-full"></span>
                  <span
                    className="absolute top-1 left-1 w-4 h-4 bg-neutral-300 rounded-full transition-all duration-300 ease-in-out transform"
                    style={{
                      transform: store.showBackground
                        ? "translateX(1rem)"
                        : "translateX(0)",
                    }}
                  ></span>
                </span>
              </label>
            </div>
          </div>

          <div className="ml-4 flex flex-col gap-2 w-fit">
            {/* Theme Selector */}
            <div className="flex items-center">
              <span className="mr-2 text-nowrap">Show background</span>
              <div className="bottom-0 bg-neutral-800 rounded shadow-lg">
                <select
                  className="px-3 py-1.5 rounded bg-neutral-800 text-white focus:outline-none w-32 appearance-none"
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
            </div>

            {/* Languages */}
            <div className="flex items-center justify-between">
              <span className="mr-2 text-nowrap">Language </span>
              <div className="bottom-0 bg-neutral-800 rounded shadow-lg">
                <select
                  className="px-3 py-1.5 rounded bg-neutral-800  text-white focus:outline-none w-32 appearance-none"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as keyof typeof languages)}
                >
                  {Object.keys(languages).map((key) => (
                    <option key={key} value={key}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="ml-4 flex flex-col h-full gap-2 w-fit ">


          <div className="flex items-center justify-between">
              <span className="mr-2 text-nowrap">Font </span>
              <div className="bottom-0 bg-neutral-800 rounded shadow-lg">
                <select
                  className="px-3 py-1.5 rounded bg-neutral-800  text-white focus:outline-none w-32 appearance-none"
                  value={fontStyle}
                  onChange={(e) => useStore.setState({ fontStyle: e.target.value as keyof typeof fonts })}
                >
                  {Object.keys(fonts).map((key) => (
                    <option key={key} value={key}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex gap-2">
              <span className="mr-2 text-nowrap">Padding</span>
              <input
                type="number"
                min={0}
                value={padding}
                onChange={(e) => setPadding(Number(e.target.value))}
                className="bg-transparent w-10"
              />
            </div>

          </div>

          <div className="ml-4 h-full my-auto">
          {/* @ts-expect-error Code works */}
          <ExportOptions targetRef={editorRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeShotsPage;
