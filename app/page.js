import { client } from "@/lib/client"
import Blogs from "./_components/Blogs";
import Premium from "./_components/Premium";
import Tags from "./_components/Tags";
import { Separator } from "@/components/ui/separator";

const blogData = async () => {
  const query = "*[_type == 'post']{title,slug, mainImage,description,publishedAt,body,author->, category->}"
  const data = await client.fetch(query)

  return data
}
const tagData = async()=>{
  const query = "*[_type == 'category']"
  const data = await client.fetch(query)

  return data
}

export default async function Home() {
  const data = await blogData()
  const dataTag = await tagData()
  return (
    <main className="flex items-center justify-between w-11/12 m-auto">
      {/* <div className="flex w-full"> */}
        <Blogs data={data}/>
        <Separator className='w-0.5 opacity-70 min-h-screen'/>
      {/* </div> */}
      <div className="w-3/12 flex flex-col items-center justify-center">
        <Premium/>
        <Tags data={dataTag}/>
      </div>
    </main>
  )
}