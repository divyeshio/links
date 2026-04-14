export interface Playlist {
  id: string;
  title: string;
  description: string;
  saves: number;
  coverUrl: string;
  url: string;
}

export interface Track {
  title: string;
  artist: string;
  coverUrl: string;
  url: string;
}

export interface SocialLink {
  platform: "Spotify" | "SoundCloud" | "YouTube" | "Twitch" | "Instagram";
  url: string;
}

export const artistName = "DVSH";
export const artistBio = "Music Curator & Artist";
export const profileImage =
  "https://i.scdn.co/image/ab6775700000ee8573fb4aeaca244dd50b4326ec";

export const tracks: Track[] = [

  {
    title: "Dhal Jaun Main vs Collide (DVSH Mashup)",
    artist: "DVSH",
    coverUrl: "https://i1.sndcdn.com/artworks-92yH7q3XWQX1Wdlo-Xgjc7A-t500x500.jpg",
    url: "https://soundcloud.com/musicbydvsh/dhal-jaun-main-vs-collide",
  },
  {
    title: "Nimbu Paani (DVSH Mashup)",
    artist: "DVSH, Mr Jammer x Champak Chacha",
    coverUrl: "https://i.scdn.co/image/ab6775700000ee8573fb4aeaca244dd50b4326ec",
    url: "https://soundcloud.com/musicbydvsh/mr-jammer-x-champak-chacha-nimbu-paani-mashup",
  },
  {
    title: "Lasso The Sun (DVSH Remix)",
    artist: "DVSH, WildVibes, Reunite",
    coverUrl: "https://i1.sndcdn.com/artworks-YNHU4UTMCRn8fZUS-iyrVjw-t500x500.jpg",
    url: "https://soundcloud.com/musicbydvsh/lasso-the-sun-wildvibes-reunite-dvsh-remix",
  },
];

export const playlists: Playlist[] = [
  {
    id: "4tEOJpngTdD7NTIjWDoLjq",
    title: "Bollywood Remixes 2026",
    description:
      "Groove to the Rhythm of Bollywood: Unleashing the Hottest Bollywood Remixes! Updated Daily.",
    saves: 12293,
    coverUrl:
      "https://mosaic.scdn.co/300/ab67616d00001e020f4f6b647dab215f130d98c7ab67616d00001e024e335a523158ef70bd1b93b6ab67616d00001e0268783033a08449116e69d8f8ab67616d00001e02fc7df1edab3683dd19e705b0",
    url: "https://open.spotify.com/playlist/4tEOJpngTdD7NTIjWDoLjq",
  },
  {
    id: "79GtZB3We9GgX8PYO4pFH1",
    title: "DVSH's EDM Picks 2026",
    description:
      "Experience EDM tunes, updated daily. Best of EDM Picks by DVSH.",
    saves: 6,
    coverUrl:
      "https://mosaic.scdn.co/300/ab67616d00001e02050767f8d525375300472a72ab67616d00001e02371a46a2c10fa0eda8e98c70ab67616d00001e02a9640e06248cc8d39f7a60d3ab67616d00001e02cc7ded0bca1c76e7b0d9af12",
    url: "https://open.spotify.com/playlist/79GtZB3We9GgX8PYO4pFH1",
  },
  {
    id: "36HDK6PZ1TgyNw5C0woepJ",
    title: "Best of Progressive House 2026",
    description:
      "Experience the emotional journey with Progressive House. Updated daily.",
    saves: 6,
    coverUrl:
      "https://mosaic.scdn.co/300/ab67616d00001e02060ebfcdf876fce9e484fe33ab67616d00001e024afd2e80a941698f95ed3f52ab67616d00001e026091a5c14de2e9b6668389bdab67616d00001e0289e9d65787df4e0059b0b61f",
    url: "https://open.spotify.com/playlist/36HDK6PZ1TgyNw5C0woepJ",
  },
  {
    id: "7w3Qfva7FDZ3G7MQepGcAs",
    title: "Bollywood Rock & Metal",
    description:
      "Feel the heat from Bollywood Rock & Metal, handpicked by DVSH.",
    saves: 4,
    coverUrl:
      "https://mosaic.scdn.co/300/ab67616d00001e020ccca2f49bcdac5491e47b1aab67616d00001e024c10036c675a8eee4b2b4669ab67616d00001e02727d531901c07a499498c544ab67616d00001e02e39388ba8eadf58476135087",
    url: "https://open.spotify.com/playlist/7w3Qfva7FDZ3G7MQepGcAs",
  },
  {
    id: "3lwdJIXdlD9EaCgcpk4Ik7",
    title: "Bollywood Lo-Fi Remixes 2026",
    description:
      "Reimagine, Relax, Repeat: Lofi Remixes for a Tranquil State of Mind.",
    saves: 725,
    coverUrl:
      "https://mosaic.scdn.co/300/ab67616d00001e021ab3caf857314fb781701ff2ab67616d00001e023209fcaff04d2ea112fc3f89ab67616d00001e025f3c8cfc1d446409476e39a7ab67616d00001e02a82f7391656097e545c8b6bb",
    url: "https://open.spotify.com/playlist/3lwdJIXdlD9EaCgcpk4Ik7",
  },
  {
    id: "3P3ZFzv1Uc14fWvPmFcLTR",
    title: "Nostalgic Hits Collection: 2000s",
    description:
      "Unlock the Soundtrack of Your Memories! Collection of hits we all grew up listening to.",
    saves: 17,
    coverUrl:
      "https://mosaic.scdn.co/300/ab67616d00001e0252fe6875028c892308ffc2f7ab67616d00001e02a2055e0b847ff66fb5206099ab67616d00001e02d7f4ae7bc86545846e3a5834ab67616d00001e02e7fa423de639247fed12be4a",
    url: "https://open.spotify.com/playlist/3P3ZFzv1Uc14fWvPmFcLTR",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "Spotify",
    url: "https://open.spotify.com/user/31c6l3ok7b477uuxmn3rmk7roug4",
  },
  { platform: "SoundCloud", url: "https://soundcloud.com/musicbydvsh" },
  { platform: "YouTube", url: "https://www.youtube.com/channel/UCghPBgGfj3VwOI1o2QiA2nA" },
  { platform: "Instagram", url: "https://instagram.com/divyeshio" },
];

export function formatSaves(count: number): string {
  if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
  return count.toString();
}
