import { Artist } from "./Artist";

export interface Track {
    id: string;
    name: string;
    album: string;
    artists: Artist[];
}