
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { urlFor } from '@/lib/builder'
import React from 'react'
import Image from 'next/image'

function Blogs({data}) {
    console.log(data.map((item)=>{return item.author}))
  return (
    <main className='grid grid-cols-3 m-auto items-center justify-center w-11/12'>
      <h1 className="col-span-3 text-center text-4xl my-10">Blogs</h1>
        {data.map((item)=>{
          return <Card className='w-10/12'>
          <CardHeader>
            <Image src={urlFor(item.mainImage).url()} width={600} alt={item.title} height={600} className="rounded-lg my-3 drop-shadow"/>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
          {/* <Badge variant="outline">{item.categories.map((itm)=> {return itm})}</Badge> */}
          </CardFooter>
        </Card>
            // return <div className=''>
            //     <Image width={700} alt={item.title} height={500} src={urlFor(item.mainImage).url()} />
            //     <h1>{item.title}</h1>
            //     <h1></h1>
            //     {/* <Image src={urlFor(item.mainImage.asset._ref)} width={1400} height={968} alt={item.title}/> */}
            //     {/* <img src={urlFor(item.mainImage)} alt="" /> */}
            // </div>
        })}
    </main>
  )
}

export default Blogs