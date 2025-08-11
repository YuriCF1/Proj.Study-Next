import React from 'react'
import Image from 'next/image'

const Avatar = ({ name, imageSrc, imageAlt }: { name: string, imageSrc: string, imageAlt: string }) => {
// const Avatar = ({ name, imageSrc }: { name: string, imageSrc: string }) => {
  return (
    <ul>
      <li>
        <Image src={imageSrc} alt={imageAlt} width={32} height={32} />
      </li>
      <li>@{name}</li>
    </ul>
  )
}

export default Avatar