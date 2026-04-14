"use client";

import { cn } from "@/lib/utils";

interface SpotifyCardProps {
  title: string;
  artist: string;
  image: string;
  link: string;
  className?: string;
}

export function SpotifyCard({ title, artist, image, link, className }: SpotifyCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex max-h-[100px] h-full w-full items-stretch justify-center overflow-hidden rounded-2xl border border-white/10 p-3 no-underline",
        className
      )}
    >
      {/* Blurred background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 block aspect-square w-[120%] -translate-x-1/2 -translate-y-1/2">
        <div className="pointer-events-none flex h-full select-none opacity-100">
          <img src={image} alt="" className="absolute brightness-150 left-0 top-0 block h-full w-full blur-[50px]" />
          <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0)_0,_rgba(0,_0,_0,_.8))]" />
        </div>
      </div>
      {/* Album art */}
      <div className="relative z-[1] w-full max-w-[75px] self-center">
        <img
          src={image}
          alt={title}
          className="pointer-events-none relative z-[1] min-h-[75px] min-w-[75px] w-full select-none rounded-lg object-cover shadow-md"
        />
      </div>
      {/* Info */}
      <div className="z-10 flex w-full flex-col justify-between">
        <div className="flex self-end">
          <svg className="w-[18px] h-[18px] text-[#BAAEBA]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
        </div>
        <div className="pl-6 text-end">
          <h2 className="whitespace-nowrap text-sm font-semibold tracking-[-.006em] text-[#D6D1D4] truncate">
            {title}
          </h2>
          <h2 className="whitespace-nowrap text-sm font-medium tracking-[-.006em] text-[#BAAEBA] truncate">
            {artist}
          </h2>
        </div>
      </div>
    </a>
  );
}
