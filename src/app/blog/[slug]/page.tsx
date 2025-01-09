// /app/blog/[slug]/page.tsx
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import BlogContent from './blogContent'

// Funzione richiesta per l'output statico
export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BLOG}/articles`)
  const data = await res.json()

  // Mappa correttamente gli slug degli articoli
  return data.data.map((article: { slug: string }) => ({
    slug: article.slug, // Uso di article.attributes.slug
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <BlogContent params={params} />
      <Footer />
    </main>
  )
}
