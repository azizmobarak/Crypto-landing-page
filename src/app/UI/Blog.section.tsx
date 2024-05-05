import React from 'react'
import { VerticalArticlesPreview,HorizontalArticlesPreview } from '../components/Articles'

export default function BlogSection () {
  return (
    <div className='flex flex-col flex-wrap items-center justify-center w-full bg-black'>
      <div className="flex flex-col flex-wrap h-full items-center justify-center mt-[50vh]">
       <VerticalArticlesPreview/>
       <HorizontalArticlesPreview/>
      </div>
    </div>
  )
}
