import { url } from 'inspector'
import Image from 'next/image'
import React from 'react'

interface jumbotronProps {
  leftContent: JSX.Element,
  rightContent: JSX.Element,
}

const Jumbotron: React.FC<jumbotronProps> = ({ leftContent, rightContent }) => {
  return (
    <div className='flex flex-col md:flex-row'>
      <div className="flex basis-1/2">
        {leftContent}
      </div>
      <div className="flex basis-1/2">
        {rightContent}
      </div>
    </div>
  )
}

export default Jumbotron