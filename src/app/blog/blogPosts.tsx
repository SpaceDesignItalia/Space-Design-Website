'use client'

import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import { Link } from '@nextui-org/react'
import axios from 'axios'
import dayjs from 'dayjs'
import 'dayjs/locale/it'
import { useEffect, useState } from 'react'

dayjs.locale('it')

function FeaturedPosts() {
  const [posts, setPosts] = useState<any[]>([])
  const [authorPhotos, setAuthorPhotos] = useState<{ [key: string]: string }>(
    {},
  )

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API_URL_BLOG +
          '/articles?filters[isFeatured][$eq]=true&&populate=*',
      )
      const postsData = res.data.data
      setPosts(postsData)

      // Recupera le foto degli autori per ogni post, inclusi AuthorProfilePic
      const authorPhotoPromises = postsData.map(async (post: any) => {
        if (post.author && post.author.documentId) {
          const photoUrl = await getAuthorPhoto(post.author.documentId)
          return { [post.author.documentId]: photoUrl }
        }
        return null
      })

      // Mappa delle foto degli autori
      const photos = await Promise.all(authorPhotoPromises)
      const photosMap = photos.reduce((acc, curr) => ({ ...acc, ...curr }), {})
      setAuthorPhotos(photosMap)
    } catch (error) {
      console.log(error)
    }
  }

  async function getAuthorPhoto(authorId: string) {
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API_URL_BLOG +
          `/authors/${authorId}?populate=*`,
      )
      const authorData = res.data.data

      // Verifica che esista AuthorProfilePic e il formato thumbnail
      const profilePic = authorData?.AuthorProfilePic
      const thumbnailUrl = profilePic?.formats?.large?.url

      // Restituisci l'URL della foto o una stringa vuota se non esiste
      return thumbnailUrl
        ? process.env.NEXT_PUBLIC_API_URL_IMAGES + `${thumbnailUrl}`
        : ''
    } catch (error) {
      console.error(error)
      return ''
    }
  }

  return (
    <div className="mt-16 pb-14">
      <h2 className="text-2xl font-medium tracking-tight">In evidenza</h2>
      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {posts.map((post, index) => (
          <Link key={index} href={`/blog/${post.slug}`}>
            <div
              key={post.slug}
              className="relative flex cursor-pointer flex-col rounded-3xl bg-white p-2 shadow-md shadow-black/5 ring-1 ring-black/5"
            >
              {post.ArticleCover && (
                <img
                  alt={post.ArticleCover.formats.large.alt || ''}
                  src={
                    process.env.NEXT_PUBLIC_API_URL_IMAGES +
                    post.ArticleCover.formats.large.url
                  }
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                />
              )}
              <div className="flex flex-1 flex-col p-8">
                <div className="text-sm/5 text-gray-700">
                  {dayjs(post.publishedAt).format('dddd, D MMMM, YYYY')}
                </div>
                <div className="mt-2 text-base/7 font-medium">
                  <span className="absolute inset-0" />
                  {post.ArticleTitle}
                </div>
                <div className="mt-2 line-clamp-4 flex-1 text-sm/6 text-gray-500">
                  {post.ArticleSummary}
                </div>

                {post.author && (
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      alt={post.author.AuthorName}
                      src={authorPhotos[post.author.documentId] || ''}
                      className="size-10 rounded-full bg-gray-50"
                    />
                    <div className="text-sm/6">
                      <p className="font-semibold text-gray-900">
                        <span className="absolute inset-0" />
                        {post.author.AuthorName}
                      </p>
                      <p className="text-gray-600">{post.author.AuthorRole}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

/* async function Categories({ selected }: { selected?: string }) {
  let categories = await getCategories()

  if (categories.length === 0) {
    return
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <Menu>
        <MenuButton className="flex items-center justify-between gap-2 font-medium">
          {categories.find(({ slug }) => slug === selected)?.title ||
            'All categories'}
          <ChevronUpDownIcon className="size-4 fill-slate-900" />
        </MenuButton>
        <MenuItems
          anchor="bottom start"
          className="min-w-40 rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
        >
          <MenuItem>
            <Link
              href="/blog"
              data-selected={selected === undefined ? true : undefined}
              className="group grid grid-cols-[1rem,1fr] items-center gap-2 rounded-md px-2 py-1 data-[focus]:bg-gray-950/5"
            >
              <CheckIcon className="hidden size-4 group-data-[selected]:block" />
              <p className="col-start-2 text-sm/6">All categories</p>
            </Link>
          </MenuItem>
          {categories.map((category) => (
            <MenuItem key={category.slug}>
              <Link
                href={`/blog?category=${category.slug}`}
                data-selected={category.slug === selected ? true : undefined}
                className="group grid grid-cols-[16px,1fr] items-center gap-2 rounded-md px-2 py-1 data-[focus]:bg-gray-950/5"
              >
                <CheckIcon className="hidden size-4 group-data-[selected]:block" />
                <p className="col-start-2 text-sm/6">{category.title}</p>
              </Link>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
      <Button variant="outline" href="/blog/feed.xml" className="gap-1">
        <RssIcon className="size-4" />
        RSS Feed
      </Button>
    </div>
  )
} */

export default function BlogPosts() {
  const [posts, setPosts] = useState<any[]>([])
  const [authorPhotos, setAuthorPhotos] = useState<{ [key: string]: string }>(
    {},
  )

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API_URL_BLOG + '/articles?populate=*',
      )
      const postsData = res.data.data
      setPosts(postsData)

      // Recupera le foto degli autori per ogni post, inclusi AuthorProfilePic
      const authorPhotoPromises = postsData.map(async (post: any) => {
        if (post.author && post.author.documentId) {
          const photoUrl = await getAuthorPhoto(post.author.documentId)
          return { [post.author.documentId]: photoUrl }
        }
        return null
      })

      // Mappa delle foto degli autori
      const photos = await Promise.all(authorPhotoPromises)
      const photosMap = photos.reduce((acc, curr) => ({ ...acc, ...curr }), {})
      setAuthorPhotos(photosMap)
    } catch (error) {
      console.log(error)
    }
  }

  async function getAuthorPhoto(authorId: string) {
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API_URL_BLOG +
          `/authors/${authorId}?populate=*`,
      )
      const authorData = res.data.data

      // Verifica che esista AuthorProfilePic e il formato thumbnail
      const profilePic = authorData?.AuthorProfilePic
      const thumbnailUrl = profilePic?.formats?.large?.url

      // Restituisci l'URL della foto o una stringa vuota se non esiste
      return thumbnailUrl
        ? process.env.NEXT_PUBLIC_API_URL_IMAGES + `${thumbnailUrl}`
        : ''
    } catch (error) {
      console.error(error)
      return ''
    }
  }

  if (posts.length === 0) {
    return <p className="mt-6 text-gray-500">No posts found.</p>
  }

  return (
    <div>
      <FeaturedPosts />
      <div className="mt-6">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="relative grid grid-cols-1 border-b border-b-gray-100 py-10 first:border-t first:border-t-gray-200 max-sm:gap-3 sm:grid-cols-3"
          >
            <div>
              <div className="text-sm/5 max-sm:text-gray-700 sm:font-medium">
                {dayjs(post.publishedAt).format('dddd, MMMM D, YYYY')}
              </div>
              {post.author && (
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    alt={post.author.AuthorName}
                    src={authorPhotos[post.author.documentId] || ''}
                    className="size-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm/6">
                    <p className="font-semibold text-gray-900">
                      <span className="absolute inset-0" />
                      {post.author.AuthorName}
                    </p>
                    <p className="text-gray-600">{post.author.AuthorRole}</p>
                  </div>
                </div>
              )}
            </div>
            <div className="sm:col-span-2 sm:max-w-2xl">
              <h2 className="text-sm/5 font-medium">{post.ArticleTitle}</h2>
              <p className="mt-3 text-sm/6 text-gray-500">
                {post.ArticleSummary}
              </p>
              <div className="mt-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex items-center gap-1 text-sm/5 font-medium"
                >
                  <span className="absolute inset-0" />
                  Continua a leggere
                  <ArrowForwardIosRoundedIcon sx={{ fontSize: 15 }} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
