"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface PageNavProps {
  options: { value: string; label: string }[];
  currentPath: string;
}

const PageNav = ({ options, currentPath }: PageNavProps) => {
  const router = useRouter();
  const [selectedPage, setSelectedPage] = useState("");

  useEffect(() => {
    setSelectedPage(currentPath === "/" ? "Select one" : currentPath);
  }, [currentPath]);


const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newPage = event.target.value;
    setSelectedPage(newPage);
    if (newPage) router.push(newPage);
};

  return (
    <select
      value={selectedPage}
      onChange={handleChange}
      className="bg-black appearance-none text-neutral-400 border border-neutral-500/25 rounded py-1.5 px-3 text-sm font-medium focus:border-neutral-500 focus:outline focus:outline-neutral-500"
    >
      <option value="Select one" disabled>
        Select one
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value} className="w-fit">
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default PageNav;
