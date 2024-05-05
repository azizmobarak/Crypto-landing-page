import Image from 'next/image'
import React from 'react'

export default function SocialIcons() {
  return (
    <>
    <a className='mx-1' href='#'><Image src={'/assets/icons/Telegram.png'} alt='' width={20} height={20} /></a>
    <a className='mx-1' href='#'><Image src={'/assets/icons/Discord.png'} alt='' width={20} height={20} /></a>
    <a className='mx-1' href='#'><Image src={'/assets/icons/Twitter.png'} alt='' width={20} height={20} /></a>
    </>
  )
}
