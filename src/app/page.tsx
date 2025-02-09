export default function Home() {
  return (
    <div>
        <div className="text-white">
          <h2>Making changes into tools according to my needs.</h2>
          <ul>
            <li>
              <a href="/codeshots">CodeShots</a>
            </li>
            <li>
              <a href="/framex">FrameX</a>
            </li>
            <li>
              <a href="/packstats">Packstats</a>
            </li>
          </ul>
        </div>

    </div>
  );
}

import Image from "next/image";

const Navbar = () => {
    return ( 
        <div className="bg-neutral-900 py-2.5 px-4 flex justify-between">
            <div className="flex items-center gap-2">
                <Image src="/logo.svg" alt="logo" width={24} height={24} />
                {/* <p className="bg-neutral-500/15 text-neutral-500 border border-neutral-500/25 rounded py-0.5 px-3 text-sm font-medium -2">Select Tools</p> */}
            </div>
            {/* <p className="text-neutral-200">Navbar</p> */}
            {/* <p className="bg-red-500/15 text-red-500 border border-red-500/25 rounded py-0.5 px-3 text-sm font-medium -2">Download Image</p> */}
        </div>
     );
}
 
