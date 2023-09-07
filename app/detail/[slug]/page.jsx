import { urlFor } from '@/lib/builder'
import { client } from '@/lib/client'
import React from 'react'
import PortableText from 'react-portable-text'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const getSpecific = async(slug) =>{
  const query = `*[_type == "post" && slug.current == "${slug}"][0]{
    title,
    mainImage,
    author->,
    body[]{
      ...,
      asset->{
        ...,
        "_key":_id
      }
    }
  }`

  const data = await client.fetch(query)

  return data

}

async function page({params}) {
    const data = await getSpecific(params.slug)
    console.log(data)
    
  return (
    <main className='flex flex-col w-1/2 m-auto justify-center'>
      <Image src={urlFor(data.mainImage).url()} className='rounded-lg shadow-2xl' alt={data.title} width={800} height={500}/>
      <div className='my-12'>
      <h1 className='text-5xl text-foreground font-bold'>{data.title}</h1>
      </div>
      <div className='flex items-center'>
        <Avatar className=''>
            <AvatarImage src={urlFor(data.author.image).url()} />
            <AvatarFallback>{data.author.name}</AvatarFallback>
        </Avatar>
        <div className='mx-2'>
          <p>{data.author.name}</p>
        </div>
      </div>
      {/* <PortableText content={data.body} components={{}}/> */}
    </main>
  )
}

export default page 