import { Track } from "@/interfaces/Track";
import Layout from "@/layouts/Layout";
import { searchTracks } from "@/services/spotify";
import { useState } from "react";

export default function Explore() {

    // states
    const [tracks, setTracks] = useState<Track[]>([]);  
    const [search, setSearch] = useState<string>("");

    // functions
    const clickSearch = async () => {
        const token = localStorage.getItem("spotifyToken");
        if(token){
          const tracks = await searchTracks(token, search);
          const mappedTracks = tracks.map((track: any) => {
            const id = track.id
            const name = track.name;
            const album = track.album.images[0].url
            const artists = track.artists.map((artist: any) => {
              return {
                name: artist.name
              }
            });

            return {
              id,
              name,
              album,
              artists
            }
          })
          setTracks(mappedTracks);
          
        }
    }

    return (
      <Layout menuActiveItem="explore">
        <div>
          <h1 className="text-xl bg-gradient-to-r from-pomepink to-pomepeach bg-clip-text text-transparent">
            Explore New Tracks
          </h1>
          <div className="w-full flex">
            <input placeholder="Enter a Name" className="w-5/6 py-1 border-1 border-pome
            rounded-bl-lg rounded-tl-lg px-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <button className="w-1/6 bg-pome text-light rounded-tr-lg rounded-br-lg"
            onClick={clickSearch}
            >
              Search
            </button>
          </div>
          {tracks.length > 0 ? (
            <div className="w-full mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tracks.map((track) => (
              <div key={track.id} className="flex items-center border-2 border-pome py-2 rounded-lg bg-light cursor-pointer shadow-md"
              >
                <img src={track.album} alt={track.name} className="w-32 rounded-lg mx-2 h-32 object-cover" />
                <div className="flex flex-col">
                  <h3 className="mt-2 mx-2 text-xl bg-gradient-to-r from-pomepink to-pomepeach bg-clip-text text-transparent">{track.name}</h3>
                  <div className="flex">
                    <h3 className="text-sm mx-2 whitespace-wrap overflow-hidden">
                      {track.artists.map((artist) => artist.name).join(', ')}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
            </div>
          ):(
            <div className="flex flex-col justify-center items-center h-96 ">
              <img src="pomeanimate.png" className="h-32 w-32"/>
              <h1 className="text-base mt-3">No tracks found</h1>
            </div>
          )}
        </div>
      </Layout>
    )
}
