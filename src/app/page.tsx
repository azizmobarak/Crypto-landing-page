import Image from "next/image";
import Header from "./components/Header";
import Section from "./components/Sections";
import { LinearButton } from "./components/Buttons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <header className="flex flex-col h-100 space-between w-full h-header header-bg-img">
        <Header/>
       <div className="flex flex-col grow-4 h-3/4 items-start ml-5 title-w-55 justify-end w-full">
         <h1 className="h1 text-white text-start font-MonumentExtended-regular ml-20 lg:text-6xl sm:text-2xl md:text-4xl uppercase">
          The world's first
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
           <h3 dir="ltr" className="h1 w-3/5 text-white text-start font-MonumentExtended-regular lg:text-4xl md:text-4xl sm:text-2xl uppercase text-linear-gradient ml-[-40%]">
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
    </main>
  );
}
