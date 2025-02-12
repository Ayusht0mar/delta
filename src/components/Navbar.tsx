"use client"
import Image from "next/image";
import PageNav from "./PageNav";
import { usePathname } from "next/navigation";
import Link from "next/link";


const options = [
    { value: "/codeshots", label: "CodeShots" },
    { value: "/framex", label: "FrameX" },
    { value: "/packstats", label: "Packstats" },

];


const Navbar = () => {

    const router = usePathname();

    return ( 
        <div className="bg-neutral-900 absolute w-full py-1.5 px-4 flex items-center justify-between top-0 z-50 shadow shadow-white/10" suppressHydrationWarning>
            <div className="flex items-center gap-2">
                <Link href="/">
                    <Image src="/logo.svg" alt="logo" width={24} height={24} />
                </Link>

                <PageNav options={options} currentPath={router} />
            </div>
            <p className="text-neutral-500">
                Built by <a href="https://dub.sh/ayushtomar" target="_" className="text-neutral-300 hover:text-neutral-200 px-1">Ayush Tomar</a>
            </p>
        </div>
     );
}
 
export default Navbar;