import { FadeText } from "@/components/magicui/fade-text";

export function FadeTextDemo() {
  return (
    <div className="flex flex-row space-y-8 text-center">
    <FadeText
        className="text-md font-bold dark:text-white bg-gradient-to-r from-blueberry via-raspberry to-cherry bg-clip-text text-transparent"
        direction="down"
        framerProps={{
        show: { transition: { delay: 0.6 } },
        }}
        text="Blueberry, Blackberry, Cranberry, Raspberry, Cherry, Strawberry"
    /> 
    </div>
  );
}
