
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='conatiner flex justify-between pb-4 border-b mb-4 py-4'>
      <div>
        <Link href={"/"}>
          <h1 className='h1 text-indigo-600'>Tech News</h1>
        </Link>
          <p className='text-sm font-normal'>Exploring tommorow&apos;s innovations,<br /> One Bite at a time</p>
      </div>
      <Link href={"/sign-in"}>
        <div className="btn">Sign in</div>
      </Link>
    </div>
  )
}
export default Navbar
