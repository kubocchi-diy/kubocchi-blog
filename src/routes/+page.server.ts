import { newtClient } from '$lib/server/newt'
import type { Article } from '$lib/types/article'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
  const { items: articles } = await newtClient.getContents<Article>({
    appUid: 'blog',
    modelUid: 'article',
    query: {
      select: ['_id', 'title', 'slug', 'description', 'body', 'publishedAt']
    }
  })
  return {
    articles
  }
}
