import { newtClient } from '$lib/server/newt'
import type { Article } from '$lib/types/article'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
  const article = await newtClient.getFirstContent<Article>({
    appUid: 'blog',
    modelUid: 'article',
    query: {
      slug: params.slug,
      select: ['_id', 'title', 'slug', 'body']
    }
  })
  return {
    article
  }
}
