
<script lang="ts">
  import PostList from '$lib/components/PostList.svelte';
  import PostItem from '$lib/components/Post.svelte'
  import type { PageData } from './$types'
  export let data: PageData
</script>

<svelte:head>
  <title>くぼっちブログ: ホーム</title>
  <meta name="description" content="kubocchi blog home" />
</svelte:head>

<main>
  <PostList>
    {#each data.articles as article (article._id)}
      <PostItem post={article} />
    {/each}
  </PostList>
</main>
