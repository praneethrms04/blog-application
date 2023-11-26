"use client"
import React from 'react'
import Link from 'next/link'
import { categoriesData } from '../utils'

const CategoriesList = () => {
  return (
    <div className="flex gap-2 text-sm flex-wrap">
      {
         categoriesData && categoriesData.map((category)=>(
            <Link href={`/categories/${category.name}`} className=' bg-gradient-to-r from-teal-300 via-blue-300 to-blue-400 px-4 py-2 rounded-md  font-semibold '>{category.name} </Link>
         ))
      }
    </div>
  )
}
 
export default CategoriesList
