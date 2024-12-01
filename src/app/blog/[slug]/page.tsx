import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import BlogContent from './blogContent'

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <BlogContent params={params} />
      <Footer />
    </main>
  )
}
