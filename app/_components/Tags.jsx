import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

function Tags({data}) {
  return (
    <section className='flex flex-col border-secondary border-2 bg-opacity-20 rounded items-center justify-center my-5'>
      <h1 className='col-span-3 text-3xl font-medium text-center my-5'>Tags</h1>
      <Separator className="my-4 w-7/12 m-auto" />
      <div className=' m-auto'>
      {data.map((item)=>{
        return <button>
          <Badge variant="outline" className='mx-5 py-2 hover:bg-foreground hover:text-secondary my-5 bg-cover'>{item.title}</Badge>
        </button>
        })}
        </div>
    </section>
  )
}

export default Tags