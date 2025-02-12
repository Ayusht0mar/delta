
export default function Home() {
  return (
    <div>
        <div className="text-white flex flex-col items-center justify-center h-screen">
          <div className="space-y-3 flex flex-col">
            <a href="/codeshots" className="bg-neutral-800 border-neutral-600 border p-4 rounded">
              <p>CodeShots</p>
              <p className="text-neutral-400">A tool to make code snippets image.</p>
            </a>
            <a href="/framex" className="bg-neutral-800 border-neutral-600 border p-4 rounded">
              <p>FrameX</p>
              <p className="text-neutral-400">A tool to make Twitter/X post image.</p>
            </a>
            <a href="/packstats" className="bg-neutral-800 border-neutral-600 border p-4 rounded">
              <p>Packstats</p>
              <p className="text-neutral-400">A tool to see stats of your npm packs.</p>
            </a>
          </div>
        </div>
    </div>
  );
}


