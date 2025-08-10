import React from 'react'
import Image from 'next/image'

const Avatar = ({ name, imageSrc, imageAlt }: { name: string, imageSrc: string, imageAlt: string }) => {
  return (
    <ul>
      <li>
        <Image src={imageSrc} alt={imageAlt} width={40} height={40} />
      </li>
      <li>@{name}</li>
    </ul>
  )
}

export default Avatar