import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
    {
        name: "Taylor Swift",
        username: "@TaylorSwift",
        body: "Songs: 'Anti-Hero', 'Love Story', 'Blank Space'.",
        img: "https://i.scdn.co/image/ab6761610000e5ebe672b5f553298dcdccb0e676",
    },
    {
        name: "Bad Bunny",
        username: "@BadBunnyPR",
        body: "Songs: 'Safaera', 'YHLQMDLG', 'Vete'.",
        img: "https://eltijuanense.com/wp-content/uploads/2023/10/iKTO9RFS_400x400.jpg",
    },
    {
        name: "The Weeknd",
        username: "@TheWeekndVEVO",
        body: "Songs: 'Blinding Lights', 'Starboy', 'Save Your Tears'.",
        img: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
    },
    {
        name: "Drake",
        username: "@Drake",
        body: "Songs: 'God's Plan', 'Hotline Bling', 'In My Feelings'.",
        img: "https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9",
    },
    {
        name: "Peso Pluma",
        username: "@PesoPluma",
        body: "Songs: 'Ella Baila Sola', 'PRC', 'Rosa Pastel'.",
        img: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84ec2a4a26b22a71536899dafe",
    },
    {
        name: "Feid",
        username: "@Feid",
        body: "Songs: 'Feliz Cumpleaños', 'Porfa', 'Ferxxo'.",
        img: "https://i.scdn.co/image/ab67616d00001e022317dfed4b3aabea1f45cab4",
    },
    {
        name: "Travis Scott",
        username: "@TravisScottVEVO",
        body: "Songs: 'SICKO MODE', 'Goosebumps', 'HIGHEST IN THE ROOM'.",
        img: "https://i.scdn.co/image/ab6761610000e5eb19c2790744c792d05570bb71",
    },
    {
        name: "SZA",
        username: "@SZA",
        body: "Songs: 'Good Days', 'Kiss Me More', 'Broken Clocks'.",
        img: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84bb56e07473e8ce02e9040a7b",
    },
    {
        name: "Karol G",
        username: "@KarolGVEVO",
        body: "Songs: 'Bichota', 'Tusa', 'Ahora Me Llama'.",
        img: "https://i.scdn.co/image/ab6761610000e5eb4b0754aefc9db490e02205ec",
    },
    {
        name: "Lana Del Rey",
        username: "@LanaDelRey",
        body: "Songs: 'Summertime Sadness', 'Born To Die', 'Video Games'.",
        img: "https://i.scdn.co/image/ab6761610000e5ebb99cacf8acd5378206767261",
    },
    
    
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-pome bg-light hover:bg-slate-300",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-72 w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-pome md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
