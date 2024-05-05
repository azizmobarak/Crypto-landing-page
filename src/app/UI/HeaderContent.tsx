import React from 'react'
import Header from '../components/Header'

export default function HeaderContent() {
  return (
    <header className="flex flex-col h-100 space-between w-full h-header header-bg-img">
        <Header/>
       <div className="flex flex-col grow-4 h-3/4 items-start ml-5 title-w-55 justify-end w-full">
         <h1 className="h1 text-white text-start font-MonumentExtended-regular ml-20 lg:text-6xl sm:text-2xl md:text-4xl uppercase">
          The world&apos;s first
          platform for Tokenizing
          AI blockchain projects
        </h1>
        <div className="ml-20 mt-40">
          <hr className="hr-linear-gradient"/>
          <span className="font-satoshi-bold text-linear-gradient sm:text-xs md:text-sm lg:text-sm ">Hold the Creon Pass NFT and earn passive income from AI Tools</span>
           <hr className="hr-linear-gradient"/>
        </div>
        </div>
      </header>
  )
}
