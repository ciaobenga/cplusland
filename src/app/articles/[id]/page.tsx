import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from '@/sections/Header'

const articles = [
     {
          id: 1,
          title: "The Future of Metric Tracking - Circle+",
          image: "/chart_dart.jpg",
          author: "Brian Simiyu",
          date: "2023-07-01",
          content: [
               "As we look towards the horizon of web development, exciting new technologies and methodologies are emerging that promise to reshape how we build and interact with the web. From cutting-edge frameworks to innovative design paradigms, the landscape is evolving at a rapid pace.",
               "One of the most significant trends is the rise of AI-assisted coding. Tools powered by machine learning are becoming increasingly sophisticated, offering developers intelligent code completion, bug detection, and even automated refactoring. This not only speeds up the development process but also helps in writing more efficient and error-free code.",
               "Another area of growth is in the realm of serverless architectures. As cloud computing continues to mature, more developers are embracing serverless solutions that allow for greater scalability and reduced operational overhead. This shift is enabling teams to focus more on building features and less on managing infrastructure.",
               "Progressive Web Apps (PWAs) continue to gain traction, blurring the line between web and native applications. With improved performance, offline capabilities, and the ability to send push notifications, PWAs are becoming an attractive option for businesses looking to provide a seamless cross-platform experience.",
               "In conclusion, the future of web development is bright and full of possibilities. As developers, it's crucial to stay informed about these trends and continuously adapt our skills to meet the evolving demands of the digital landscape."
          ]
     },
     {
          id: 2,
          title: "Mastering your Metrics - Circle+",
          image: "/desk.svg",
          author: "Brian Simiyu",
          date: "2023-07-15",
          content: [
               "React Hooks have revolutionized the way we write React components, allowing developers to use state and other React features without writing a class. This article will dive deep into the world of React Hooks and explore how they can be used to build efficient, reusable components.",
               "We'll start by covering the basics of useState and useEffect, the two most commonly used hooks. useState allows you to add state to functional components, while useEffect lets you perform side effects in these components. We'll explore various use cases and best practices for these hooks.",
               "Next, we'll delve into more advanced hooks like useContext, useReducer, and useCallback. useContext provides a way to pass data through the component tree without having to pass props down manually at every level. useReducer is a powerful tool for managing complex state logic in your applications. useCallback can help you optimize the performance of your components by memoizing callback functions.",
               "We'll also cover how to create custom hooks, allowing you to extract component logic into reusable functions. This is a powerful pattern that lets you share stateful logic between components without changing their structure.",
               "Finally, we'll discuss some common pitfalls when using hooks and how to avoid them. This includes the rules of hooks, how to handle dependencies in useEffect, and strategies for debugging hooks.",
               "By the end of this article, you'll have a solid understanding of React Hooks and how to leverage them to write cleaner, more efficient React code. Whether you're new to React or an experienced developer looking to level up your skills, mastering hooks is essential for modern React development."
          ]
     }
]

export default async function ArticlePage(props: { params: Promise<{ id: string }> }) {
     const params = await props.params;
     const article = articles.find(a => a.id === parseInt(params.id))

     if (!article) {
          notFound()
     }

     return (
          <div className="min-h-screen bg-black text-gray-200">
               <Header />
               <div className="container mx-auto px-4 py-8 max-w-3xl">
                    <Card className="bg-black border-white/25 px-6">
                         <CardHeader>
                              <CardTitle className="text-2xl font-semibold text-white">{article.title}</CardTitle>
                              <p className="text-sm text-gray-400">{article.date} - {article.author}</p>
                         </CardHeader>
                         <img
                              src={article.image}
                              alt={`Illustration for ${article.title}`}
                              width={800}
                              height={400}
                              className="w-full h-auto rounded-lg"
                         />
                         <CardContent className="mt-6 text-sm md:text-base text-justify">
                              {article.content.map((paragraph, index) => (
                                   <p key={index} className="mb-4 last:mb-0 text-gray-300">
                                        {paragraph}
                                   </p>
                              ))}
                         </CardContent>
                    </Card>
               </div>
          </div>
     )
}

export async function generateMetadata(props: { params: Promise<{ id: string }> }) {
     const params = await props.params;
     const article = articles.find(a => a.id === parseInt(params.id))

     if (!article) {
          return {
               title: 'Article Not Found',
               description: 'The requested article could not be found.',
          }
     }

     return {
          title: article.title,
          description: article.content[0],
          openGraph: {
               title: article.title,
               description: article.content[0],
               images: [{ url: article.image }],
          },
          twitter: {
               card: 'summary_large_image',
               title: article.title,
               description: article.content[0],
               images: [article.image],
          },
     }
}