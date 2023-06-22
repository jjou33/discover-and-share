import Image from 'next/image'

import bannerImage from '#/banner.jpg'

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="flex h-150 items-center justify-center bg-cover bg-center">
          <Image
            src={bannerImage.src}
            width={500}
            height={100}
            alt="배너 이미지"
            className="h-full w-screen object-cover object-center"
          />
        </div>
      </main>
    </>
  )
}
