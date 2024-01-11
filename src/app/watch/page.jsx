import React from 'react'
import VideoPlayer from './components/VideoPlayer'
import Comments from './components/Comments'
import TabNav from '@/components/TabNav'
import HorizontalCard from './components/HorizontalCard'

const page = () => {
  return (
    <main className='w-full h-auto mt-14 px-[100px] flex'>
      <div className='left w-full max-w-[1280px] flex flex-1 flex-col pr-4'>
        <VideoPlayer />
        <Comments />
      </div>
      <div className='right w-[430px] flex flex-col'>
        <TabNav />
        <HorizontalCard />
      </div>
    </main>
  )
}

export default page