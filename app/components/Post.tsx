"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


interface PostProps {
  id: string;
  title: string;
  content: string;
  author: string;
  datePublished: string;
  category: string;
  links: string[];
  thumbnail?: string;
}

const Post  = ({
  id,
  title,
  content,
  author,
  datePublished,
  category,
  links,
  thumbnail,
} : PostProps) => {
  return (
   <div className="my-4 border-b border-b-300 py-8">
      <div className="mb-4">
        {author ? (
          <>
            Posted by: <span className="font-bold">{author}</span> on{" "}
            {datePublished}
          </>
        ) : (
          <>Posted on {datePublished}</>
        )}
      </div>

      <div className="w-full h-72 relative">
        {thumbnail ? (
          <Image
            src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
            alt={title}
            fill
            className="object-cover rounded-md object-center"
          />
        ) : (
          <Image
            src={"/thumbnail-placeholder.png"}
            alt={title}
            fill
            className="object-cover rounded-md object-center"
          />
        )}
      </div>

      {category && (
        <Link
          className="category-btn py-1.5 text-sm w-fit  mt-4 block"
          href={`categories/${category}`}
        >
          {category}
        </Link>
      )}

      <h2 className='h4 text-gray-800'>{title}</h2>
      <p className="leading-normal">{content}</p>

      {links && (
        <div className="my-4 flex flex-col gap-3">
          {links.map((link, i) => (
            <div key={i} className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>

              <Link className="link" href={link}>
                {link}
              </Link>
            </div>
          ))}
        </div>
      )}


    </div>
  )
}

export default Post
