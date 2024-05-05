
import React from 'react';

type Props = {
    children: React.ReactElement;
}

export function Section ({children}: Props){
   return(
    <section id="simple-section">
     {children}
    </section>
   )
}


export function Row ({children}: Props){
   return(
    <section id="simple-section" className="flex flex-row items-center justify-center flex-wrap-reverse w-full h-full bg-black text-white p-10">
     {children}
    </section>
   )
}

export function Column ({children}: Props){
   return(
    <section id="simple-section" className="flex flex-col flex-wrap w-full h-full bg-black text-white p-10">
     {children}
    </section>
   )
}


Section.Row = Row;
Section.Col = Column;

export default Section;