import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import Image from "next/image";

export function OrbitingCirclesComponent() {
  return (
    <div className="relative flex h-[500px] w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        RWA Tokens
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Icons.typescript />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Icons.tailwind />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        reverse
        radius={190}
        duration={20}
      >
        <Icons.nextjs />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        reverse
        radius={190}
        duration={20}
        delay={20}
      >
        <Icons.supabase />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  typescript: (props: IconProps) => (
        <Image src="https://utfs.io/f/XlNOM5gnOXxMLhKDAUK6v2PzCY967ayMBemFdAjnTKt8h5xN" alt=""
      width={100}
      height={100}
    />
  ),
  tailwind: (props: IconProps) => (
      <Image src="https://utfs.io/f/XlNOM5gnOXxMd7AtBMujO04nIA2NxXpbLKHw8dso7tW5qlae" alt=""
      width={100}
      height={100}
    // className="bg-black p-2 rounded"
    />
  ),
  supabase: (props: IconProps) => (
      <Image src="https://utfs.io/f/XlNOM5gnOXxMd99ikyujO04nIA2NxXpbLKHw8dso7tW5qlae" alt=""
      width={100}
      height={100}
    // className="bg-black p-2 rounded"
    />
  ),
  nextjs: (props: IconProps) => (
      <Image src="https://utfs.io/f/XlNOM5gnOXxMKr3KXaY8RYeszBfiC36gl5V4rHaJTPNpI0Qw" alt=""
      width={100}
      height={100}
      className="bg-white p-1 rounded"
    />
  ),
};
