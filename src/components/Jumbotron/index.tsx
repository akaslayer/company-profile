import { url } from 'inspector'
import Image from 'next/image'
import React from 'react'

interface jumbotronProps {
  leftContent: JSX.Element,
  rightContent: JSX.Element,
}

const Jumbotron: React.FC<jumbotronProps> = ({ leftContent, rightContent }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
      {leftContent}
      {rightContent}
    </div>
  )
}

export default Jumbotron