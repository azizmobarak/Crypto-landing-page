'use client';

import React, { useState } from 'react'
import NavListItem from './NavListItem'
import '../style/header.scss';
import { LinearButton, OutlinedButton } from './Buttons';
import Drawer from './Drawer';

export default function Header() {
    const [isMenuShown, setIsMenuShown] = useState<boolean>(false);
  return(
    <div className="flex justify-between items-center p-4 w-full">
        <Drawer isMenuShown={isMenuShown}/>
    <div className="flex-shrink-0 w-2/4">
        <img src="/assets/logo.png" alt="Logo" className="h-8"/>
    </div>
    <div className='hidden lg:block flex items-center space-x-10 w-2/4'>
    <nav className="flex justify-end items-center space-x-4">
        <NavListItem title='Cron Pass' url='#'/>
        <NavListItem isNewFeature={true} title='Token' url='#'/>
        <NavListItem isNewFeature={true} title='AI Revenue' url='#'/>
        <NavListItem isNewFeature={true} title='AI Launchpad' url='#'/>
       <OutlinedButton title='Connect' borderStyle='border-inherit'/>
    </nav>
    </div>
    <div className='block lg:hidden'>
        <LinearButton title='Menu' onPress={()=> setIsMenuShown(!isMenuShown)}/>
    </div>
    </div>
    )
}
