'use client'

import { Container } from '@/components/container'
import Loader from '@/components/loader'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded'
import { Button } from '@nextui-org/react'
import axios from 'axios'
import dayjs from 'dayjs'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

// Interface definitions
interface Formats {
  formats: ImageFormats
}

interface ImageFormats {
  large: ImageFormatDetails
  small: ImageFormatDetails
  medium: ImageFormatDetails
  thumbnail: ImageFormatDetails
}

interface ImageFormatDetails {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: string | null
  size: number
  width: number
  height: number
  sizeInBytes: number
}

interface AuthorProfilePic {
  id: number
  documentId: string
  name: string
  alternativeText: string | null
  caption: string | null
  width: number
  height: number
  formats: ImageFormats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string | null
  provider: string
  provider_metadata: string | null
  createdAt: string
  updatedAt: string
  publishedAt: string
}

interface Author {
  documentid: string
  AuthorName: string
  AuthorRole: string
  AuthorProfilePic: AuthorProfilePic
}

interface ArticleData {
  id: number
  documentId: string
  ArticleTitle: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  author: Author
  ArticleDescription: PortableTextBlock[] // Adjusted to use PortableTextBlock[]
  ArticleCover: Formats
}

interface PortableTextBlock {
  type: string
  level: number
  format?: string
  image?: {
    url: string
    alternativeText: string
  }
  children: Array<{
    text: string
    bold?: boolean
    italic?: boolean
    underline?: boolean
    strikethrough?: boolean
    code?: boolean
    [key: string]: any // Allow for any additional properties
  }>
}

const CustomPortableText = ({ value }: { value: PortableTextBlock[] }) => {
  const renderText = (child: any) => {
    let formattedText: React.ReactNode = child.text

    if (child.bold)
      formattedText = <strong className="font-bold">{formattedText}</strong>
    if (child.italic)
      formattedText = <em className="italic">{formattedText}</em>
    if (child.underline)
      formattedText = <u className="underline">{formattedText}</u>
    if (child.strikethrough)
      formattedText = <del className="line-through">{formattedText}</del>
    if (child.code) {
      formattedText = (
        <code className="rounded-md bg-gray-200 p-1 font-mono text-sm text-gray-800">
          {formattedText}
        </code>
      )
    }

    return formattedText
  }

  const renderBlock = (block: PortableTextBlock, index: number) => {
    switch (block.type) {
      case 'heading':
        const HeadingTag = `h${block.level}` as keyof JSX.IntrinsicElements
        const headingClass = `text-${7 - block.level}xl font-bold mt-6 mb-2 text-black`
        return React.createElement(
          HeadingTag,
          { key: index, className: headingClass },
          block.children?.map((child) => renderText(child)),
        )

      case 'paragraph':
        return (
          <p key={index} className="mb-4 mt-2 text-lg text-black">
            {block.children?.map((child, childIndex) =>
              child.type === 'link' && child.url ? (
                <a
                  key={childIndex}
                  href={child.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black underline"
                >
                  {child.children?.map((linkChild: any) =>
                    renderText(linkChild),
                  )}
                </a>
              ) : (
                renderText(child)
              ),
            )}
          </p>
        )

      case 'quote':
        return (
          <blockquote
            key={index}
            className="border-l-4 pl-4 italic text-gray-600"
          >
            {block.children?.map((child) => renderText(child))}
          </blockquote>
        )

      case 'list':
        const ListTag = block.format === 'unordered' ? 'ul' : 'ol'
        const listClass =
          block.format === 'unordered' ? 'list-disc' : 'list-decimal'
        return (
          <ListTag key={index} className={`${listClass} pl-6 text-black`}>
            {block.children?.map((item, itemIndex) => (
              <li key={itemIndex} className="mb-2">
                {item.children?.map((child: any) => renderText(child))}
              </li>
            ))}
          </ListTag>
        )

      case 'image':
        const imageUrl = block.image?.url
        const altText = block.image?.alternativeText || ''
        return imageUrl ? (
          <img
            key={index}
            src={imageUrl}
            alt={altText}
            className="my-10 max-w-full rounded-xl object-cover"
          />
        ) : null

      default:
        return null
    }
  }

  return <div>{value.map((block, index) => renderBlock(block, index))}</div>
}

export default function BlogContent({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<ArticleData | null>(null)
  const [authorPhoto, setAuthorPhoto] = useState<string | null>(null)
  const { slug } = params

  useEffect(() => {
    fetchPost()
  }, [slug])

  async function fetchPost() {
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API_URL_BLOG +
          `/articles?filters[slug]=${slug}`,
      )
      if (res.status === 200 && res.data.data.length > 0) {
        const res2 = await axios.get(
          process.env.NEXT_PUBLIC_API_URL_BLOG +
            `/articles/${res.data.data[0].documentId}?populate=*`,
        )
        setPost(res2.data.data)

        if (res2.data.data?.author?.documentId) {
          const authorPhotoUrl = await getAuthorPhoto(
            res2.data.data.author.documentId,
          )
          setAuthorPhoto(authorPhotoUrl)
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function getAuthorPhoto(authorId: string) {
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_API_URL_BLOG +
          `/authors/${authorId}?populate=*`,
      )
      const profilePic = res.data.data?.AuthorProfilePic
      return profilePic?.formats?.large?.url
        ? process.env.NEXT_PUBLIC_API_URL_IMAGES +
            `${profilePic.formats.large.url}`
        : ''
    } catch (error) {
      console.error(error)
      return ''
    }
  }

  if (!post) return <Loader />
  console.log(post)
  return (
    <Container>
      <Navbar />
      <Subheading className="mt-16">
        {dayjs(post.publishedAt).format('dddd, D MMMM, YYYY')}
      </Subheading>
      <Heading as="h1" className="mt-2">
        {post.ArticleTitle}
      </Heading>
      <div className="mt-16 grid grid-cols-1 gap-8 pb-24 lg:grid-cols-[15rem_1fr] xl:grid-cols-[15rem_1fr_15rem]">
        <div className="flex flex-wrap items-center gap-8 max-lg:justify-between lg:flex-col lg:items-start">
          {post.author && (
            <div className="relative mt-8 flex items-center gap-x-4">
              {authorPhoto && (
                <img
                  alt={post.author.AuthorName}
                  src={authorPhoto}
                  className="size-10 rounded-full bg-gray-50"
                />
              )}
              <div className="text-sm/6">
                <p className="font-semibold text-gray-900">
                  {post.author.AuthorName}
                </p>
                <p className="text-gray-600">{post.author.AuthorRole}</p>
              </div>
            </div>
          )}
        </div>
        <div className="text-gray-700">
          <div className="max-w-7xl xl:mx-auto">
            {post.ArticleCover && post.ArticleCover.formats.large?.url && (
              <img
                alt={post.ArticleTitle}
                src={
                  process.env.NEXT_PUBLIC_API_URL_IMAGES +
                  `${post.ArticleCover.formats.large.url}`
                }
                className="mb-10 aspect-[3/2] w-full rounded-2xl object-contain shadow-xl"
              />
            )}
            <CustomPortableText value={post.ArticleDescription || []} />
            <div className="mt-10">
              <Button
                as={Link}
                color="primary"
                href="/blog"
                radius="full"
                className="flex w-1/5 flex-row items-center gap-2"
              >
                <ArrowBackIosRoundedIcon sx={{ fontSize: 15 }} />
                Tutti gli articoli
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
