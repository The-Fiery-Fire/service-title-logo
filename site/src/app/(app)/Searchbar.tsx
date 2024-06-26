"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { cn } from "lazy-cn";
import { useTheme } from "next-themes"
import { useQueryState } from "nuqs";
import { SVGProps } from "react"
import { themes } from "../themes"
import { ThemeDropdown } from "./ThemeChanger"

export function DesktopSearchBar() {
  const {theme, setTheme} = useTheme()
  return (
    <div className="hidden md:flex gap-2 sticky top-5 z-10">
      <div className="transition-all absolute inset-0 -mt-5 -mx-4 h-16 rounded-b-3xl bg-theme-bg" />
      <div className="grow">
        <SearchBar />
      </div>
      <ThemeDropdown />

      <div className="transition-all absolute left-0 right-0 top-16 h-12 rounded-t-xl shadow-[0_-40px_0_0_var(--bg)] bg-transparent" />
    </div>
  );
}


export function IconamoonArrowDown2Fill(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 9a1 1 0 0 0-.707 1.707l5 5a1 1 0 0 0 1.414 0l5-5A1 1 0 0 0 17 9z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default function SearchBar(props: { className?: string; style?: any }) {
  const [search, setSearch] = useQueryState("search");

  return (
    <div
      style={{
        viewTransitionName: "searchbar",
      }}
      className={cn(
        "transition-all p-1 px-3 h-12 rounded-full bg-theme-card  relative z-10",
        props.className
      )}
    >
      <input
        className="font-display tracking-widest text-theme-stronger placeholder:text-theme-text text-xl rounded-md p-2 w-full outline-none bg-transparent"
        placeholder="search..."
        onChange={event => {
          if (event.target.value === "") {
            setSearch(null);
          } else {
            setSearch(event.target.value);
          }
        }}
      />
    </div>
  );
}
