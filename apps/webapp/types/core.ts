export type Torrent = {
  title: string;
  dateUploaded: string | Date;
  size: bigint;
  seeders: number;
  peers: number;    
  magnetLink: string;
  infohash: string;
  jackettindexer?: {
    id: string;
    name: string;
  };
};