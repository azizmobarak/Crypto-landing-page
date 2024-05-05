import Image from 'next/image';
import React from 'react'

interface Article {
  title: string;
  slug?: string;
  content: string;
  image: string;
}

const verticalListArticlesData: Article[] = [
    {
        title:'token',
        slug: 'The Gateway token to the world of AI',
        content:'Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.',
        image:'/assets/token.png',
    },
     {
        title:'revenue',
        slug: 'Driving income and growth through decentralization',
        content:'CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.',
        image:'/assets/revenu.png',
    },
     {
        title:'launchpad',
        slug: 'Driving the future of AI Innovation',
        content:'The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.',
        image:'/assets/launchpad.png',
    }
]

export function VerticalArticlesPreview() {
  return (
    <div className='flex flex-wrap flex-row p-4 text-white justify-center gap-8'>
        {
            verticalListArticlesData.map((article:Article, index: number)=> VerticalArticleBody({...article, index}))
        }
    </div>
  )
}



const horizontalListArticlesData: Article[] = [
    {
        title:'AI Prospects, Market Size, and Development Pace',
        content:'The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.',
        image: '/assets/aiprospect.png',
    },
    {
        title:'AI Tools and Market',
        content:'AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.',
        image: '/assets/aitools.png',
    },
    {
        title:'AI, Crypto, and NFT Market',
        content:'Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.',
        image: '/assets/aicrypto.png',
    }
]


export function HorizontalArticlesPreview() {
  return (
    <div className='flex flex-wrap flex-col p-10 text-white justify-center items-center gap-4 w-full'>
        {
            horizontalListArticlesData.map((article:Article, index: number)=> HorizontalArticleBody({...article, index}))
        }
    </div>
  )
}


function VerticalArticleBody ({index, title, slug, image, content}: Article & {index: number}) {
  return(
    <div key={index} className='flex flex-col gap-2 bg-zinc-900 p-2 rounded'>
            <div className='flex w-full flex-row z-44 relative top-0 mt-[-5%] justify-end'>
                <span className='bg-white text-black px-1 rounded-full text-sm font-satoshi-regular'>COMING SOON</span>
            </div>
             <div className='max-w-80 h-20'>
                <h1 className='h1 text-4xl font-MonumentExtended-regular uppercase'>{title}</h1>
                <span className='font-satoshi-bold text-linear-gradient'>{slug}</span>
             </div>
             <div className='w-full mt-4 ml-[-2%]'>
                <Image src={image} alt={slug ?? ''} width={300} height={234} />
             </div>
             <div className='max-w-80 p-6 font-satoshi-regular'>
                <article className='text-sm'>{content}</article>
             </div>
 </div>
  )
}


function HorizontalArticleBody ({index, title, image, content}: Article & {index: number}) {
   return <div 
    key={index}
   className='flex flex-row space-between gap-2 bg-zinc-900 rounded w-full h-full'>
       <div className='flex flex-col gap-2 w-3/4 p-6' >
        <h1 className='h1 text-4xl font-MonumentExtended-regular uppercase'>{title}</h1>
       <article className='text-xs max-w-[800px] max-h-full'>{content}</article>
       </div>
       <Image className='w-2/6 h-full' src={image} alt={title} width={100} height={100} />
    </div>
}