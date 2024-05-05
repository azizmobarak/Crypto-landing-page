import React from 'react'

type Props = {
title: string;
url: string;
isNewFeature?: boolean;
}

export default function NavListItem({title, url, isNewFeature}: Props) {
  return (
    <a href={url} className="text-white hover:text-gray-300 navLisItem">
        {title}
        {isNewFeature && <span>SOON</span>}
    </a>
  )
}
