import { client } from '@/lib/client'
import React from 'react'


const generateStaticParams = async() =>{
    const query = "*[_type == 'post']{slug}"
    const data = await client.fetch(query)

    return data.map((item)=>{
        slug: item.current
    })
}


async function page({params}) {
    const {slug} = params
    // const data = await generateStaticParams()
    // console.log(data)
  return (
    <main>

    </main>
  )
}

export default page