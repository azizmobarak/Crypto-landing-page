import React from 'react'
import Section from '../components/Sections'
import Image from 'next/image'

export default function ProfitingSection() {
  return (
    <Section.Col>
        <>
        <div className="flex flex-col align-center- justify-center w-full">
         <div className="flex flex-row align-center- justify-center w-3/4">
           <h2 className="h1 w-4/5 text-white text-end font-MonumentExtended-regular lg:text-6xl md:text-4xl sm:text-2xl uppercase">
          Profiting Through
          </h2>
          <div className="w-1/5"/>
         </div>
         <div className="flex flex-row align-center- justify-end w-full">
          <div className="w-1/5"/>
           <h3 dir="ltr" className="h1 w-3/5 text-white text-start font-MonumentExtended-regular lg:text-4xl md:text-4xl sm:text-2xl uppercase text-linear-gradient">
           AI Innovation & Decentralization
           </h3>
         </div>
        </div>
        <div className="flex flex-col flex-wrap align-center- justify-center w-full h-full lg:p-20 sm:p-4 sm:my-10">
          <div className="flex flex-row flex-wrap w-full h-full justify-center">
             <Image src={'/assets/profitingThrough.png'} width={400} height={400} alt="profiting through" className="lg:w-2/4 md:w-2/4 h-full" />
             <div className="flex flex-wrap lg:w-2/4 sm:w-4/4 items-center justify-center">
                <div className="flex flex-col justify-center align-center lg:w-2/4 md:w-2/4 sm:w-3/4 h-2/4 gap-4">
                  <h4 className="font-satoshi-bold h4 text-xl w-3/4">
                    The dynamic community driven business model of the future.
                  </h4>
                  <p className="font-MonumentExtended-regular text-sm text-slate-300">
                    At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects we launch.
                  </p>
                </div>
             </div>
          </div>
        </div>
        </>
      </Section.Col>
  )
}
