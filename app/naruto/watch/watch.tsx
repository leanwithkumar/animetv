'use client'

import { useSearchParams } from 'next/navigation'

export default function Narutowatch() {
  const searchParams = useSearchParams()
  const video = searchParams.get('video')

  return (
    <div className="min-h-screen bg-cover text-white pt-25 px-4 sm:px-8 flex items-start justify-center"
    style={{
      backgroundImage : "url('https://images3.alphacoders.com/137/1376355.jpg')"
    }}>
      <div className="w-full max-w-6xl">
        {video ? (
          <div className="aspect-video w-full  overflow-hidden  border border-white/10 bg-black">
            <iframe
              className="w-full h-full"
              src={video}
              title="Anime Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <p className="text-center text-red-500 text-lg font-semibold mt-10">
            No video link provided
          </p>
        )}
      </div>
    </div>
  )
}
