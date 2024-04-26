
import { cn } from "lazy-cn"
import Image from "next/image"
import Link from "next/link"
import { DataImage } from "../../../../types/types"

export default function ArtCard(props: {
  image: DataImage,
  order?: number,
}) {
  const image = props.image
  return (
    <div
      className="relative  rounded-lg flex flex-col  group"
      style={{
        // animationDelay: `${ (props.order ?? 0) * 10 }ms`,
        viewTransitionName: `img-${ image.title.replace('.','') }`,
      }}
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
        <Image unoptimized src={image.src} alt={image.title} title={image.title} fill className={cn(`object-cover ${ image.className } transition-all group-hover:scale-110`)} />
      </div>
      <div className="p-2 flex justify-between text-xs font-mono text-slate-500">
        <div className="flex items-center gap-1">
          {
            image.author.pfp &&
            <div className="w-4 h-4 rounded-full bg-slate-400 relative overflow-hidden">
              <Image unoptimized src={image.author.pfp} fill className="object-cover" alt="" />
            </div>
          }
          <Link
            href={'/' + image?.author?.name}
            className="hover:underline grow">{image?.author?.name}</Link>
        </div>
        {
          image.raw && (
            <Link href={image.raw} target="_blank" className="hover:underline">
              source
            </Link>
          )
        }
      </div>
    </div>
  )
}