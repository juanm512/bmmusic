import Image from "next/image"
import ButtonPlay from "./ButtonPlay"

export default function PrincipalSection() {
  return (
    <div className="relative px-16">
      <div className="relative my-8 h-px w-full bg-neutral-100/50" />

      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-justify text-9xl font-normal text-neutral-300">
            BM - M.A. {"("}Mejores Amigos{")"} Remix
          </h1>
        </div>
      </div>
      <div className="relative my-8 h-px w-full bg-neutral-100/50" />
      <div className="relative flex h-0 w-full items-center justify-end">
        <ButtonPlay />
        {/* hacer otro como si fuera una bocina sonando */}
      </div>
      <div className="aspect-h-6 aspect-w-16">
        <Image
          src="/cover.jpg"
          alt="Picture of the author"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
