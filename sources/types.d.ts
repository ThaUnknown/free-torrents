export interface Result {
  title: string,
  link: string,
  id?: number,
  seeders: number,
  leechers: number,
  downloads: number,
  hash: string,
  size: number,
  verified: boolean,
  date: Date,
  type?: 'batch' | 'best' | 'alt'
}

export interface Options {
  anilistId?: number,
  anidbAid?: number,
  anidbEid?: number,
  titles?: string[],
  episode?: number,
  episodeCount?: number,
  resolution?: string,
  exclusions?: string[],
}

export type SearchFunction = (options: Options) => Promise<Result[]>

export type Config = {
  seed?: 'perma' | number // seed ratio to hit
}

export type Accuracy = 'High' | 'Medium' | 'Low'

export interface Tosho {
  title?: string
  timestamp: number
  torrent_url: string
  torrent_name: string
  info_hash: string
  magnet_uri: string
  seeders: null
  leechers: null
  torrent_downloaded_count?: number
  total_size: number
  num_files: number
  torrent_url?: string
  article_url?: string
  website_url?: string
  nyaa_id?: string
  anidb_aid?: number
  anidb_eid?: number
  anidb_fid?: number
}

export interface Seadex {
  items: {
    alID: number
    expand: {
      trs: {
        created: Date
        dualAudio: boolean
        files: {
          length: number
          name: string
        }[]
        infoHash: string
        isBest: boolean
        releaseGroup: string
      }[]
    }
    trs: string[]
  }[]
}
