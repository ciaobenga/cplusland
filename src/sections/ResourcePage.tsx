import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const articles = [
  {
    id: 1,
    title: "The Future of Metrics Mastery",
    description: "Explore emerging trends and technologies shaping the future of web development.",
    category: "Trends",
    date: "2023-07-01",
    image: "/co_founder.jpg",
  },
  {
    id: 2,
    title: "Mastering Your Metrics",
    description: "Deep dive into React Hooks and learn how to build efficient, reusable components.",
    category: "React",
    date: "2023-07-15",
    image: "/goalseek.jpg",
  },
]

export const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-black text-gray-200 p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        {articles.map((article) => (
          <Card key={article.id} className="bg-black border border-white/30 flex md:flex-row flex-col items-center p-4">
            <CardHeader className='p-10'>
              <img
                src={article.image}
                alt={article.title}
                width={200}
                className="h-auto object-cover bg-no-repeat rounded-t-lg"
              />
            </CardHeader>
            <CardContent className='text-center md:text-left'>
              <CardTitle className="md:text-xl text-lg font-semibold mb-2 text-white">{article.title}</CardTitle>
              <CardDescription className="text-sm text-gray-400 mb-2">{article.date}</CardDescription>
              <Badge variant="secondary" className="bg-gray-700 text-gray-200 mb-2">{article.category}</Badge>
              <p className="text-gray-300 font-normal md:text-base text-sm mb-4 text-pretty">{article.description}</p>
              <Link href={`/articles/${article.id}`} className='bg-[#5328f3] py-2 px-4 rounded-md hover:bg-[#6c43ff]'>
                <span className="text-white hover:underline cursor-pointer">Read more</span>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}