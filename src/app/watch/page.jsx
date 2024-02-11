import React from 'react'
import VideoPlayer from './components/VideoPlayer'
import CommentSection from './components/CommentSection'
import TabNav from '@/components/TabNav'
import HorizontalCard from './components/HorizontalCard'
import Descriptions from './components/Discription'

const Page = () => {
  return (
    <main className='w-full h-auto mt-14 pl-[10px] md:pl-[20px] lg:px-[100px] lg:flex'>
      <div className='left w-full lg:w-[65%] pr-4'>
        <VideoPlayer />
        <Descriptions />
        <CommentSection />
      </div>
      <div className='right lg:w-[35%] flex flex-col'>
        <TabNav />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
      </div>
    </main>
  )
}

export default Page