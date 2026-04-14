import { useState, useEffect, useRef } from "react";
import {
  playlists, tracks, socialLinks, artistName, artistBio, profileImage, formatSaves,
  type Playlist, type Track,
} from "../../data/links";
import { SocialIcon } from "../SocialIcons";
import { Heart, Music2, ChevronDown } from "lucide-react";
import { GradientWaveText } from "../spell/GradientWaveText";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { motion, AnimatePresence } from "motion/react";

function getPlatformIcon(url: string) {
  if (url.includes("spotify.com")) return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" /></svg>
  );
  if (url.includes("soundcloud.com")) return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.057-.049-.1-.1-.1m-.899.828c-.06 0-.091.037-.104.094L0 14.479l.172 1.308c.013.06.045.094.09.094.042 0 .075-.038.09-.094l.2-1.308-.2-1.332c-.015-.06-.045-.094-.09-.094m1.83-1.229c-.063 0-.109.05-.117.109l-.215 2.546.215 2.455c.008.063.054.108.117.108.063 0 .108-.045.12-.108l.248-2.455-.248-2.546c-.012-.06-.057-.109-.12-.109m.99-.421c-.075 0-.128.06-.131.12l-.2 2.968.2 2.862c.003.063.056.12.131.12.074 0 .126-.057.131-.12l.226-2.862-.226-2.968c-.005-.06-.057-.12-.131-.12m1.045-.226c-.087 0-.142.066-.147.135l-.184 3.194.184 3.07c.005.069.06.131.147.131s.14-.062.15-.131l.206-3.07-.206-3.194c-.01-.069-.063-.135-.15-.135m1.05-.18c-.1 0-.158.075-.164.15l-.17 3.374.17 3.199c.006.075.064.146.164.146.099 0 .156-.071.165-.146l.192-3.199-.192-3.374c-.009-.075-.066-.15-.165-.15m1.073-.22c-.109 0-.17.082-.176.164l-.156 3.594.156 3.31c.006.082.067.163.176.163.108 0 .168-.081.176-.163l.178-3.31-.178-3.594c-.008-.082-.068-.164-.176-.164m1.079-.105c-.12 0-.184.09-.19.177l-.139 3.699.139 3.396c.006.09.07.177.19.177s.182-.087.19-.177l.16-3.396-.16-3.699c-.008-.087-.07-.177-.19-.177m1.09.012c-.129 0-.197.096-.201.19l-.128 3.498.128 3.467c.004.097.072.189.201.189.129 0 .195-.092.203-.189l.145-3.467-.145-3.498c-.008-.094-.074-.19-.203-.19m1.102-.033c-.142 0-.209.103-.213.2l-.113 3.53.113 3.517c.004.104.071.199.213.199s.207-.095.215-.199l.127-3.517-.127-3.53c-.008-.097-.073-.2-.215-.2m1.152-.046c-.15 0-.222.11-.225.21l-.1 3.577.1 3.548c.003.11.075.208.225.208.15 0 .22-.098.226-.208l.117-3.548-.117-3.577c-.006-.1-.076-.21-.226-.21m2.206-.09c-.09.002-.163.055-.205.112-.043.057-.053.076-.053.22l-.006.148-.094 3.188.1 3.54c.004.118.082.215.227.215.143 0 .222-.097.228-.215l.113-3.54-.113-3.336c-.006-.128-.085-.228-.228-.228-.008 0-.018-.003-.028-.003m.922-.12c-.074 0-.145.03-.197.082-.053.052-.082.124-.086.2l-.093 3.45.099 3.532c.005.128.09.222.234.222.14 0 .228-.094.236-.222l.105-3.532-.105-3.45c-.005-.076-.033-.148-.086-.2-.053-.052-.126-.082-.198-.082m1.126-.07c-.078 0-.152.03-.21.09-.058.058-.088.135-.094.215l-.083 3.52.089 3.52c.005.135.094.227.239.227.144 0 .235-.092.24-.227l.1-3.52-.1-3.52c-.006-.08-.036-.157-.094-.215-.058-.058-.132-.09-.21-.09m1.104-.012c-.166 0-.299.135-.306.296l-.073 3.533.079 3.5c.007.165.14.296.306.296.165 0 .297-.131.306-.296l.089-3.5-.089-3.533c-.009-.161-.141-.296-.306-.296m1.156.028c-.087 0-.166.035-.225.093-.06.058-.094.14-.097.225l-.063 3.504.07 3.478c.003.088.037.17.097.225.06.058.138.093.225.093.085 0 .165-.035.224-.093.059-.055.094-.137.098-.225l.076-3.478-.076-3.504c-.004-.085-.04-.167-.098-.225-.06-.058-.139-.093-.224-.093m7.063 1.397c-.314 0-.615.055-.9.152-.186-2.088-1.946-3.726-4.098-3.726-.549 0-1.07.11-1.539.299-.184.074-.232.15-.236.3v7.42c.004.152.126.278.28.294h6.493c1.218 0 2.207-.99 2.207-2.21 0-1.218-.989-2.207-2.207-2.207" /></svg>
  );
  return <Music2 className="w-4 h-4" />;
}

function SpotifyPlaylistCard({ playlist }: { playlist: Playlist }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/[0.07] hover:bg-white/10 transition-all duration-500"
    >
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="w-full text-left p-4 cursor-pointer hover:shadow-[inset_0px_0px_10px_4px_rgba(255,255,255,0.05)] transition-all duration-500"
      >
        <div className="relative z-10 flex gap-4 items-center">
          <img src={playlist.coverUrl} alt={playlist.title} className="w-18 h-18 rounded-xl object-cover shrink-0 group-hover:scale-[1.03] transition-transform duration-500" />
          <div className="flex-1 min-w-0">
            <h3 className="text-[15px] font-semibold text-white truncate">{playlist.title}</h3>
            <p className="text-white/30 text-xs mt-1 line-clamp-2">{playlist.description}</p>
            <div className="flex items-center gap-1.5 mt-2">
              <Heart className="w-3 h-3 text-[#1affb2]/60" />
              <span className="text-[#1affb2]/60 text-xs">{formatSaves(playlist.saves)} saves</span>
            </div>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-white/30 shrink-0 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4">
              <iframe
                className="rounded-xl"
                src={`https://open.spotify.com/embed/playlist/${playlist.id}?utm_source=generator&theme=0`}
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SoundCloudTrackCard({ track }: { track: Track }) {
  const [expanded, setExpanded] = useState(false);
  const embedUrl = `https://w.soundcloud.com/player/?url=${encodeURIComponent(track.url)}&color=%236e3aff&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false`;

  return (
    <div
      className="group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/[0.07] hover:bg-white/10 transition-all duration-500"
    >
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="w-full text-left flex items-center gap-4 p-3 cursor-pointer hover:shadow-[inset_0px_0px_10px_4px_rgba(255,255,255,0.05)] transition-all duration-500"
      >
        <img src={track.coverUrl} alt={track.title} className="w-14 h-14 rounded-lg object-cover" />
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-white truncate">{track.title}</h4>
          <p className="text-white/30 text-xs mt-0.5 truncate">{track.artist}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-white/40 group-hover:text-[#6e3aff] transition-colors">
            {getPlatformIcon(track.url)}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-white/30 shrink-0 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-3 pb-3">
              <iframe
                className="rounded-xl"
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={embedUrl}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function DvshLinks() {
  const [showBottomNav, setShowBottomNav] = useState(false);
  const socialSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = socialSectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowBottomNav(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: "linear-gradient(160deg, #010408 0%, #03060c 15%, #06102a 35%, #0a0538 55%, #060e1c 75%, #010408 100%)" }}>
      {/* Aurora blobs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-15%] left-[-5%] w-[55%] h-[55%] rounded-full blur-[120px] opacity-40 animate-pulse" style={{ background: "radial-gradient(circle, #1affb2 0%, transparent 70%)", animationDuration: "7s" }} />
        <div className="absolute top-[25%] right-[-15%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-30 animate-pulse" style={{ background: "radial-gradient(circle, #6e3aff 0%, transparent 70%)", animationDuration: "9s", animationDelay: "2s" }} />
        <div className="absolute bottom-[-10%] left-[30%] w-[40%] h-[40%] rounded-full blur-[100px] opacity-25 animate-pulse" style={{ background: "radial-gradient(circle, #00b4d8 0%, transparent 70%)", animationDuration: "11s", animationDelay: "4s" }} />
      </div>
      {/* Gradient mesh overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.06]" style={{ background: "repeating-linear-gradient(45deg, transparent, transparent 80px, #1affb210 80px, #1affb210 81px)" }} />

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-16" style={{ fontFamily: "Outfit, sans-serif" }}>
        {/* Profile */}
        <div className="text-center mb-10">
          <div className="inline-block p-0.5 rounded-full bg-linear-to-tr from-[#1affb2] via-[#6e3aff] to-[#00b4d8]">
            <img src="/profile.jpeg" alt={artistName} className="w-28 h-28 rounded-full object-cover border-4 border-[#070b18]" />
          </div>
          <div className="mt-6">
            <GradientWaveText
              className="text-5xl font-bold tracking-tight"
              customColors={["#1affb2", "#6e3aff", "#00b4d8", "#1affb2"]}
              speed={0.8}
              repeat
            >
              {artistName}
            </GradientWaveText>
          </div>
          <p className="text-[#1affb2]/50 mt-1.5 text-sm tracking-widest uppercase">{artistBio}</p>
        </div>

        {/* Social */}
        <div ref={socialSectionRef} className="flex flex-wrap justify-center gap-3 mb-12">
          {socialLinks.map((link) => (
            <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/6 backdrop-blur-xl border border-white/8 text-white/70 text-sm hover:bg-white/12 hover:shadow-[inset_0px_0px_3px_1px_rgba(255,255,255,0.05)] hover:text-white transition-all duration-300">
              <SocialIcon platform={link.platform} className="w-4 h-4" />
              <span>{link.platform}</span>
            </a>
          ))}
        </div>

        {/* Playlists */}
        <SectionLabel text="Playlists" color="#1affb2" />
        <div className="space-y-3 mb-14">
          {playlists.map((pl) => (
            <SpotifyPlaylistCard key={pl.id} playlist={pl} />
          ))}
        </div>

        {/* Tracks */}
        <SectionLabel text="Featured Tracks" color="#6e3aff" />
        <div className="space-y-3 mb-14">
          {tracks.map((t) => (
            <SoundCloudTrackCard key={t.url} track={t} />
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 pointer-events-none transition-all duration-500 ease-out ${showBottomNav ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
        <div className="max-w-md mx-auto px-3 pb-6 pointer-events-auto flex justify-center">
          <div className="flex items-center justify-center gap-0.5 p-1 rounded-full bg-white/8 backdrop-blur-sm border border-white/10 shadow-lg shadow-black/20">
            {socialLinks.slice(0, 2).map((link) => (
              <a key={`nav-${link.platform}`} href={link.url} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full text-white/50 hover:text-white transition-colors">
                <SocialIcon platform={link.platform} className="w-6 h-6" />
              </a>
            ))}
            <div className="mx-1.5 -my-5 relative z-10 p-0.5 rounded-full bg-linear-to-tr from-[#1affb2] via-[#6e3aff] to-[#00b4d8] shadow-lg shadow-black/30">
              <img src="/profile.jpeg" alt={artistName} className="w-16 h-16 rounded-full object-cover border-[3px] border-[#070b18]" />
            </div>
            {socialLinks.slice(2).map((link) => (
              <a key={`nav-${link.platform}`} href={link.url} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full text-white/50 hover:text-white transition-colors">
                <SocialIcon platform={link.platform} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center gap-4 pt-8">
        <div className="h-48 sm:h-80 lg:h-160 w-full">
          <TextHoverEffect text="DVSH" duration={0.3} />
        </div>
        <p className="text-white/10 text-xs tracking-wider">© 2026 {artistName}</p>
      </div>
    </div>
  );
}

function SectionLabel({ text, color }: { text: string; color: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <Music2 className="w-3.5 h-3.5" style={{ color }} />
      <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ color: `${color}99` }}>{text}</span>
      <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, ${color}20, transparent)` }} />
    </div>
  );
}
