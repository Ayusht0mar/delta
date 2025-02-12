"use client";

import useStore from "@/store";
import { toBlob, toJpeg, toPng, toSvg } from "html-to-image";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";

import { RefObject } from "react";

const ExportOptions = ({ targetRef }: { targetRef: RefObject<HTMLDivElement> }) => {

    const title = useStore((state) => state.title);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const copyImage = async () => {
    const imgBlob = await toBlob(targetRef.current, {
        pixelRatio: 2
    });
    if (imgBlob) {
      const img = new ClipboardItem({ "image/png": imgBlob });
      navigator.clipboard.write([img]);
    } else {
      console.error("Failed to create image blob.");
    }}

    interface SaveImageOptions {
        name: string;
        format: "png" | "jpeg" | "svg";
    }

    const saveImage = async ({ name, format } : SaveImageOptions) => {

        let imgUrl, filename;

        switch (format) {
            case "png":
                imgUrl = await toPng(targetRef.current, {
                    pixelRatio: 2,
                });
                filename = `${name}.png`;
                break;
            case "jpeg":
                imgUrl = await toJpeg(targetRef.current, {
                    pixelRatio: 2,
                });
                filename = `${name}.jpeg`;
                break;
            case "svg":
                imgUrl = await toSvg(targetRef.current, {
                    pixelRatio: 2,
                });
                filename = `${name}.svg`;
                break;
            default:
                return;
        }

            const a = document.createElement("a");
            a.href = imgUrl;
            a.download = filename;
            a.click();
    }

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex gap-2 px-3 py-1.5 bg-neutral-200 text-neutral-900 rounded transition"
      >
        <p>Export</p>
        <Image src="/export.svg" alt="export" width={20} height={20} />
      </button>

      {isOpen && (
        <div className="absolute right-0 bottom-12 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
          <ul className="py-2 text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" 
                onClick={() => toast.promise (copyImage(), {
                    loading: "Copying image...",
                    success: "Image copied to clipboard!",
                    error: "Failed to copy image.",
                })}
                
                >Copy Image</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" 
                        onClick={() => toast.promise (saveImage({ name: title, format: "png" }), {
                            loading: "Exporting PNG image...",
                            success: "Image exported succressfully!",
                            error: "Failed to export image.",
                        })}

            >Save as PNG</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" 
                        onClick={() => toast.promise (saveImage({ name: title, format: "jpeg" }), {
                            loading: "Exporting JPEG image...",
                            success: "Image exported succressfully!",
                            error: "Failed to export image.",
                        })}

            >Save as JPEG</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" 
                        onClick={() => toast.promise (saveImage({ name: title, format: "svg" }), {
                            loading: "Exporting SVG image...",
                            success: "Image exported succressfully!",
                            error: "Failed to export image.",
                        })}
            >Save as SVG</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ExportOptions;
