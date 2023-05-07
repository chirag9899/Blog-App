import Image from 'next/image'
import { previewData } from 'next/headers'
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity.clientblogapp';
import  PreviewSuspense  from '../../components/previewSuspence';
import PreviewBlogList from '../../components/PreviewBlogList';
import BlogList from '@/components/BlogListblogapp';

const query=groq`
*[_type=='post']{
  ...,
  author->,
  categories[]->
}| order(_createdAt desc)

`;

export default async function Home() {
  if(previewData()){
    return (<PreviewSuspense fallback={
      <div role='status'>
        <p className='text-center text-lg animate-pulse text-[#F7AB0A]'>Loading Preview Data...</p>
      </div>
  }
  
    > <PreviewBlogList query={query}/>
      </PreviewSuspense>
      
      )

  }
  <></>

  const posts =await client.fetch(query);
  // console.log(posts);
  return (
   <BlogList posts={posts}/>
  )
}
