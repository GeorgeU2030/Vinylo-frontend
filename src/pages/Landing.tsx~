import { MarqueeDemo } from "@/components/ui/Marquee";
import Navbar from "../components/Navbar";
import '../css/landing.css';
import { FadeTextDemo } from "@/components/ui/Fadetext";

export default function Landing() {
  return (
    <div className="bg-light">
      <Navbar />
        <section className="flex flex-col items-center justify-center w-full bg-gradient-to-r from-pome via-pomeorange to-pomepeach animate-gradient-x">
          <img src="landingimage.webp" className="w-80 h-80 my-5 rounded-lg" loading="lazy"/>
          <p className="w-5/6 md:w-1/2 text-center text-light">
            Discover, rate, and track your favorite songs and artists with ease. Berrytunes is your ultimate platform for exploring music videos from YouTube, giving you the power to rate each song and see detailed statistics on your favorite artists. 
          </p>
          <button className="bg-pomedark mr-2 my-5 lg:mr-4 px-4 py-2 border-light border-2 rounded-lg text-light font-bold hover:bg-pomepink hover:text-light">
            Get Started
          </button>
        </section>

        <section className="flex flex-col items-center justify-center w-full">
          <div className="py-8 flex items-center flex-col justify-center">
            <h1 className="mb-3 font-bold text-2xl bg-gradient-to-r from-pome via-pomepinkdark to-pomeorange bg-clip-text text-transparent">Discover Top Artists</h1>
            <p className="font-semibold text-center w-5/6">Melodic features a diverse range of top artists across different genres.</p>
          </div>
        
          <MarqueeDemo />

        </section>

        <section className="flex mt-2 flex-col items-center justify-center w-full min-h-72">
          <h1 className="my-2 font-bold w-5/6 text-center text-2xl bg-gradient-to-r from-pomeorange via-pomedark to-pomepeach bg-clip-text text-transparent">Rank your favorite artists across different levels</h1>
          
          <p className="w-5/6 mb-6 md:w-1/2 text-center text-graydark font-semibold">
          Our rating system uses a range of pomes, each representing a different level of freshness.
          </p>
          
          <div className="flex flex-row gap-2">
            <img src="pomegreen.webp" alt="cherry" className="w-12 h-12"/>
            <img src="pomeyellow.webp" alt="cherry" className="w-12 h-12"/>
            <img src="pomeorange.webp" alt="cherry" className="w-12 h-12"/>
            <img src="pomepink.webp" alt="cherry" className="w-12 h-12"/>
            <img src="pomered.webp" alt="cherry" className="w-12 h-12"/>
          </div>

          <div className="my-8">
            <FadeTextDemo />
          </div>
          
        </section>

        <section className="flex mt-2 flex-col items-center justify-center w-full">
            <img src="listeningimage.webp" alt="listening" className="w-80 h-80 rounded-lg" loading="lazy" />
            <h1 className="my-3 w-5/6 text-center font-bold text-2xl bg-gradient-to-r from-pomedark via-pomepinkdark to-pomepink bg-clip-text text-transparent">Thank you for using PomeMusic!</h1>
            <p className="w-5/6 mb-6 md:w-1/2 text-center text-graydark font-semibold">
            We hope you enjoy exploring and rating your favorite music, and tracking the stats of your top artists.
            </p>
        </section>

        <footer className="py-8">
          <div className="flex flex-col items-center justify-center w-full bg-light">
            <p className="text-center text-graydark font-semibold">© 2024 Pomegranate. All rights reserved.</p>
          </div>
        </footer>
    </div>
  )
}
