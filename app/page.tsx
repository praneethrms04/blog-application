import React from "react";
import { CategoriesList, NoPostAvailable, Post } from "./components";
import { postData } from "./utils";
import Link from "next/link";


const Home = () => {

  return (
        <div>
          <div className="py-4">
          <Link href={"/carousal"} className=" px-3 py-1 text-indigo-600 underline my-2"> Go to Carousal </Link>
          </div>
          <div className="py-4">
          <Link href={"/modals"} className=" px-3 py-1 text-indigo-600 underline my-2"> Go to Modals </Link>
          </div>
      <CategoriesList />
      {postData && postData.length > 0 ? (
        postData.map((post) => (
          <Post
            key={post.id} // React will automatically handle 'key'
            id={post.id}
            title={post.title}
            content={post.content}
            author={post.author}
            datePublished={post.datePublished}
            category={post.category}
            links={post.links || []}
            thumbnail={post.thumbnail}
          />
        ))
      ) : (
        <NoPostAvailable />
      )}
    </div>
  )
};

export default Home;
                                                            