import { newtClient } from '$lib/server/newt';
import type { Author } from '$lib/types/author';
import type { PageServerLoad } from '../$types';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
// export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// export const prerender = true;


export const load: PageServerLoad = async () => {
  const { items: authors } = await newtClient.getContents<Author>({
    appUid: 'blog',
    modelUid: 'author',
    query: {
      select: ['_id', 'fullName', 'slug', 'biography', 'profileImage'],
    },
  })
  return {
    authors
  }
}
