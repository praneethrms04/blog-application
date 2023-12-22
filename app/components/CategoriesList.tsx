"use client"
import React from 'react'
import Link from 'next/link'
import { categoriesData } from '../utils'

const CategoriesList = () => {
  return (
    <div className="flex gap-2 text-sm flex-wrap">
      {
         categoriesData && categoriesData.map((category)=>(
            <Link href={`/categories/${category.name}`} className='category-btn'>{category.name} </Link>
         ))
      }
    </div>
  )
}
 
export default CategoriesList
