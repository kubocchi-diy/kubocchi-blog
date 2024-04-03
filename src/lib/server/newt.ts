
import { createClient } from 'newt-client-js'
import {
  NEWT_SPACE_UID,
  NEWT_CDN_API_TOKEN,
  NEWT_APP_UID,
  NEWT_ARTICLE_MODEL_UID,
  NEWT_AUTHOR_MODEL_UID,
  NEWT_TAG_MODEL_UID,
  PAGE_LIMIT
} from '$env/static/private'
import type { AppMeta, GetContentsQuery } from 'newt-client-js'
import type { Archive, Article } from '$lib/types/article'
import type { Author } from '$lib/types/author'
import type { Tag, TagWithCount } from '$lib/types/tag'



export const newtClient = createClient({
  spaceUid: NEWT_SPACE_UID,
  token: NEWT_CDN_API_TOKEN,
  apiType: 'cdn',
})




export const getApp = async (): Promise<AppMeta> => {
  const app = await newtClient.getApp({
    appUid: NEWT_APP_UID + '',
  })
  return app
}

export const getArticles = 
  async (
    query?: GetContentsQuery,
  ): Promise<{ articles: Article[]; total: number }> => {
    const { items: articles, total } = await newtClient.getContents<Article>({
      appUid: NEWT_APP_UID + '',
      modelUid: NEWT_ARTICLE_MODEL_UID + '',
      query: {
        depth: 2,
        ...query,
      },
    })
    return {
      articles,
      total,
    }
  }

export const getArticle = 
  async (slug: string): Promise<Article | null> => {
    if (!slug) return null

    const article = await newtClient.getFirstContent<Article>({
      appUid: NEWT_APP_UID + '',
      modelUid: NEWT_ARTICLE_MODEL_UID + '',
      query: {
        depth: 2,
        slug,
      },
    })
    return article
  };

export const getPreviousArticle = 
  async (currentArticle: Article): Promise<{ slug: string } | null> => {
    const { createdAt } = currentArticle._sys
    const article = await newtClient.getFirstContent<{ slug: string }>({
      appUid: NEWT_APP_UID + '',
      modelUid: NEWT_ARTICLE_MODEL_UID + '',
      query: {
        select: ['slug'],
        '_sys.createdAt': {
          gt: createdAt,
        },
        order: ['_sys.createdAt'],
      },
    })
    return article
  };

export const getNextArticle = 
  async (currentArticle: Article): Promise<{ slug: string } | null> => {
    const { createdAt } = currentArticle._sys
    const article = await newtClient.getFirstContent<{ slug: string }>({
      appUid: NEWT_APP_UID + '',
      modelUid: NEWT_ARTICLE_MODEL_UID + '',
      query: {
        select: ['slug'],
        '_sys.createdAt': {
          lt: createdAt,
        },
        order: ['-_sys.createdAt'],
      },
    })
    return article
  };

export const getTags = async (): Promise<TagWithCount[]> => {
  const { items: tags } = await newtClient.getContents<Tag>({
    appUid: NEWT_APP_UID + '',
    modelUid: NEWT_TAG_MODEL_UID + '',
  })

  const { items: articles } = await newtClient.getContents<{ tags: string[] }>({
    appUid: NEWT_APP_UID + '',
    modelUid: NEWT_ARTICLE_MODEL_UID + '',
    query: {
      depth: 0,
      select: ['tags'],
    },
  })

  const getTagCount = (tag: Tag) => {
    return articles.filter((article) => {
      return article.tags?.some((articleTag: string) => articleTag === tag._id)
    }).length
  }

  const popularTags: TagWithCount[] = tags
    .map((tag) => {
      return {
        ...tag,
        count: getTagCount(tag),
      }
    })
    .filter((tag) => {
      // 1件も記事のないタグは除外
      return tag.count > 0
    })
    .sort((a, b) => {
      return b.count - a.count
    })
    // 上位10件のみ取得
    .slice(0, 10)

  return popularTags
}

export const getTag = async (slug: string): Promise<Tag | null> => {
  if (!slug) return null

  const tag = await newtClient.getFirstContent<Tag>({
    appUid: NEWT_APP_UID + '',
    modelUid: NEWT_TAG_MODEL_UID + '',
    query: {
      slug,
    },
  })
  return tag
}

export const getAuthors = async (): Promise<Author[]> => {
  const { items: authors } = await newtClient.getContents<Author>({
    appUid: NEWT_APP_UID + '',
    modelUid: NEWT_AUTHOR_MODEL_UID + '',
  })

  const { items: articles } = await newtClient.getContents<{ author: string }>({
    appUid: NEWT_APP_UID + '',
    modelUid: NEWT_ARTICLE_MODEL_UID + '',
    query: {
      depth: 0,
      select: ['author'],
    },
  })

  const getAuthorCount = (author: Author) => {
    return articles.filter((article) => {
      return article.author === author._id
    }).length
  }

  const validAuthors = authors.filter((author) => {
    // 1件も記事のない著者は除外
    return getAuthorCount(author) > 0
  })

  return validAuthors
}

export const getAuthor = async (slug: string): Promise<Author | null> => {
  if (!slug) return null

  const author = await newtClient.getFirstContent<Author>({
    appUid: NEWT_APP_UID + '',
    modelUid: NEWT_AUTHOR_MODEL_UID + '',
    query: {
      slug,
    },
  })
  return author
}

export const getArchives = async (): Promise<Archive[]> => {
  const { items: articles } = await newtClient.getContents<{
    _sys: { createdAt: string }
  }>({
    appUid: NEWT_APP_UID + '',
    modelUid: NEWT_ARTICLE_MODEL_UID + '',
    query: {
      select: ['_sys.createdAt'],
    },
  })
  const oldestArticle = articles.slice(-1)[0]
  const oldestYear = new Date(oldestArticle._sys.createdAt).getFullYear()
  const currentYear = new Date().getFullYear()
  const years = Array.from(
    { length: currentYear - oldestYear + 1 },
    (_, index) => {
      return currentYear - index
    },
  )

  const getArchiveCount = (year: number) => {
    return articles.filter((article: Article) => {
      return article._sys.createdAt.startsWith(`${year}-`)
    }).length
  }

  const archives = years
    .map((year) => {
      return {
        year,
        count: getArchiveCount(year),
      }
    })
    .filter((archive) => {
      // 1件も記事のない年は除外
      return archive.count > 0
    })

  return archives
}
