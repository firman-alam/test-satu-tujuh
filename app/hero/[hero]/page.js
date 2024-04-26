'use client'

import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import CardAbility from '../../ui/card_ability'
import { getHeroByName } from '../../lib/action'
import YouTube from 'react-youtube'
import { extractYouTubeVideoId } from '../../lib/utils'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export default function HeroPage() {
  const router = useRouter()
  const { hero } = useParams()
  const [data, setData] = useState(null)

  const onReady = (event) => {
    const player = event.target
    // For automatically play the video, uncomment code below
    // player.playVideo()
  }

  const onError = (error) => {
    console.error('YouTube Player Error:', error)
  }

  useEffect(() => {
    if (hero) {
      const fetchData = async () => {
        const heroData = await getHeroByName(hero)
        setData(heroData)
      }
      fetchData()
    }
  }, [hero])

  return (
    <>
      <button
        className='flex gap-2 cursor-pointer mb-4 text-black'
        onClick={() => router.push('/')}
      >
        <ArrowLeftIcon width={20} height={20} /> Back home
      </button>
      <div className='flex flex-wrap items-center justify-start'>
        <div className='md:w-1/2 flex justify-center'>
          <Image
            src={data?.fullPortrait}
            alt={data?.displayName}
            width={400}
            height={400}
            loading='lazy'
          />
        </div>

        <div className='flex-row md:w-1/2 space-y-4'>
          <div>
            <h1 className='text-3xl'>
              <span className='text-slate-700'>Hero</span> - {data?.displayName}
            </h1>
            <h1 className='text-xl'>
              <span className='text-slate-700'>Role</span> - {data?.role}
            </h1>
          </div>
          <div className='w-2/3'>
            <p className='text-slate-700'>Description: </p>
            <p className='text-wrap text-justify'>{data?.description}</p>
          </div>

          <p className='text-slate-700'>Abilities:</p>
          <div className='flex flex-wrap gap-4'>
            <Carousel className='w-full max-w-md'>
              <CarouselContent>
                {data?.abilities?.map((ability, index) => (
                  <CarouselItem key={index}>
                    <CardAbility data={ability} key={ability?.slot} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            {/* <Carousel data={data?.abilities || []} /> */}
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center'>
        <YouTube
          videoId={extractYouTubeVideoId(data?.video)}
          onReady={onReady}
          onError={onError}
        />
      </div>
    </>
  )
}
