import { client } from "@/lib/client"
import Nav from "./_components/Nav"
import Blogs from "./_components/Blogs";

const blogData = async () => {
  const query = "*[_type == 'post']{title,slug, mainImage,description,publishedAt,body,author->, category->}"
  const data = await client.fetch(query)

  return data
}

export default async function Home() {

  const data = await blogData()
  console.log(data)

  return (
    <Blogs data={data}/>
  )
}