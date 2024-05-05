import React, { useEffect, useState } from 'react'
import { OutlinedButton } from './Buttons'
import NavListItem from './NavListItem';
import SocialIcons from '../UI/SocialIcons';

type Props = {
    isMenuShown: boolean;
}
export default function Drawer({isMenuShown}: Props) {
    const [showMenu, setShowMenu] = useState<string>('hidden')
    
    useEffect(() => {
      setShowMenu(isMenuShown ? 'fixed' : 'hidden');
    },[isMenuShown]);

  return (
    <div
    className={`flex flex-col bg-black z-40 ${showMenu} h-full t-0 inset-y-0 mr-0 right-0 w-2/4 items-center`}
    >
     <div className='flex flex-row w-full justify-center gap-5 py-4'>
       <OutlinedButton title='Connect' borderStyle='border-inherit w-2/4 text-lg'/>
       {/* SVG can be used in instead of X */}
       <button onClick={()=>setShowMenu('hidden')}
        className='text-white bg-blue-600 p-2 px-4 rounded font-bold size-10'
        >X</button>
     </div>
     <nav className="flex flex-col justify-start items-start space-y-4 p-8 w-full">
        <hr className='border-slate-800 w-full'/>
        <NavListItem title='Cron Pass' url='#'/>
        <hr className='border-slate-800 w-full'/>
        <NavListItem isNewFeature={true} title='Token' url='#'/>
        <hr className='border-slate-800 w-full'/>
        <NavListItem isNewFeature={true} title='AI Revenue' url='#'/>
        <hr className='border-slate-800 w-full'/>
        <NavListItem isNewFeature={true} title='AI Launchpad' url='#'/>
        <hr className='border-slate-800 w-full'/>
    </nav>
    <div className='flex'>
      <SocialIcons/>
    </div>
    </div>
  )
}
