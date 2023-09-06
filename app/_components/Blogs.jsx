import React from 'react'
import Link from 'next/link'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { urlFor } from '@/lib/builder'
import Image from 'next/image'

function Blogs({data}) {
  return (
    <main className='w-7/12'>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl my-10">Blogs</h1>
        {data.map((item)=>{
            return <Link href={`detail/${item.slug.current}`}>
              <Card className='w-full my-5'>
              <CardHeader>
                <div className="flex my-2 items-center">
                <Avatar className='w-5 h-5'>
                  <AvatarImage src={urlFor(item.author.image).url()} />
                  <AvatarFallback>{item.author.title}</AvatarFallback>
                </Avatar>
                <p className="text-sm mx-2">{item.author.name}</p>
                <p className="text-sm mx-2 opacity-80 italic">{new Date(item.publishedAt).toDateString()}</p>
                </div>
                <CardTitle className='text-2xl'>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={urlFor(item.mainImage).url()} width={200} alt={item.title} height={200} className="rounded-lg my-3 drop-shadow"/>
              </CardContent>
              <CardFooter>
              <Badge variant="outline">{item.category.title}</Badge>
              </CardFooter>
            </Card>
            </Link>
          })}
      </div>
    </main>
  )
}

export default Blogs