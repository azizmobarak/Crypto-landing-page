import Image from 'next/image'
import React from 'react'
import SocialIcons from './SocialIcons'

export default function Footer() {
  return (
    <div className='flex flex-row w-full justify-center text-white bg-black'>
        <div className='flex flex-row p-8 w-3/4'>
        <div className='flex flex-row w-2/5 items-center'>
          <span className='w-3/4 text-slate-400'>
            © Creon 2023. All rights reserved.
          </span>

          <div className='flex flex-row w-1/4'>
            <SocialIcons/>
            </div>
        </div>
        <div className='flex w-3/5 justify-end'>
         <p className='text-slate-400'>
            Powered by <strong className='text-slate-100'>NIFTABLES</strong>
         </p>
        </div>
        </div>
    </div>
  )
}
