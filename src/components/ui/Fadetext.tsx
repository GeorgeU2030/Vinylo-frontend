import { FadeText } from "@/components/magicui/fade-text";

export function FadeTextDemo() {
  return (
    <div className="flex flex-row space-y-8 text-center">
    <FadeText
        className="text-md font-bold dark:text-white bg-gradient-to-r from-pomepeach via-pomepink to-pomedark bg-clip-text text-transparent"
        direction="down"
        framerProps={{
        show: { transition: { delay: 0.6 } },
        }}
        text="Green Pome | Yellow Pome | Orange Pome | Pink Pome | Red Pome"
    /> 
    </div>
  );
}
