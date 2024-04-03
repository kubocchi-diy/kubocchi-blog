<script lang="ts">
  import type { PageData } from './$types'
  export let data: PageData
</script>

<svelte:head>
  <title>{data.article?.title}</title>
  <meta name="description" content={data.article?.title} />
</svelte:head>

<main>
  <h1>{data.article?.title}</h1>
  <div>{@html data.article?.body}</div>
</main>