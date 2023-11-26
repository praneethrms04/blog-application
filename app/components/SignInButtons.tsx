"use client"
import React from 'react'
import Image from 'next/image'
import * as assets from "../assets"

const SignInButtons = () => {
  return (
      <div className="mt-4 p-4 flex flex-col items-center justify-center gap-4">
        <button
          className="flex items-center border p-4 rounded-full gap-4 hover:bg-slate-100/25 transition"
        >
            <Image
              src={assets.githublogo}
              width={30}
              height={30}
              alt="GitHub Logo"
            />
          Sign In With GitHub
        </button>

        <button
          className="flex items-center border p-4 rounded-full gap-4 hover:bg-slate-100/25 transition"
        >
            <Image
              src={assets.googlelogo}
              width={30}
              height={30}
              alt="Google Logo"
            />
          Sign In With Google
        </button>
        </div>
  )
}

export default SignInButtons
