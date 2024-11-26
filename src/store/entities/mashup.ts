import { createEntityStore } from '@/store/entities/entities.ts';

export interface Mashup {
    id: number;
    name: string;
    authors: string[];
    authorsIds: number[];
    genres: string[];
    tracks: number[];
    imageUrl: string;
    backgroundColor: number;
    statuses: number;
    albumId: number;
    likes: number;
    streams: number;
    bitrate: number;
    duration: number;
    durationStr: string;
    liked: boolean;
}

export const useMashupStore = createEntityStore<Mashup>('mashup/get');