import Link from 'next/link'
import React from 'react'

const NoPostAvailable = () => {
  return (
    <div>
      No Posts Available
      <Link href={'/create-post'} className='btn'> Create a Post </Link>
    </div>
  )
}

export default NoPostAvailable
