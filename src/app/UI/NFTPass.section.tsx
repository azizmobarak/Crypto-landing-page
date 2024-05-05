
import React from 'react'
import Section from '../components/Sections'
import { LinearButton } from '../components/Buttons'
import Image from 'next/image'

export default function NFTPassSection() {
  return (
    <Section.Row>
        <>
        <div className="lg:w-2/4 md:w-2/4 sm:w-4/4">
          <div className="flex flex-col w-full h-full items-center justify-center text-left">
              <h2 className="font-MonumentExtended-regular lg:text-6xl md:text-4xl sm:text-2xl text-start uppercase title-w-55">creon pass nft</h2>
              <h4 className="font-satoshi-bold text-linear-gradient sm:text-xs md:text-sm lg:text-sm text-start my-10 title-w-55 ml-0">
              The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income through AI-driven tools
              </h4>
              <div className="flex flex-col gap-6 font-satoshi-regular text-sm w-2/4">
                <p>Pre-launch investment opportunities for upcoming AI projects</p>
                <p>Free and early access to Creon built AI projects</p>
                <p>Higher allocation limits on the Creon AI Launchpad</p>
                <p>Revenue share distribution from Creon built AI projects</p>
              </div>
              <div className="w-2/4 ml-[-5%] justify-center mt-20">
                <LinearButton title="Buy Creon Pass"/>
              </div>
          </div>
        </div>
        <div className="flex items-center justify-center lg:w-2/4 md:w-2/4 sm:w-full">
          <Image src={'/assets/firstsectionimg.png'} alt="shape light image" width={200} height={200} className="w-full p-10" />
        </div>
        </>
      </Section.Row>
  )
}
