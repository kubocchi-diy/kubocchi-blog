<script lang="ts">
  import type { PageData } from './$types'
  export let data: PageData
</script>

<svelte:head>
  <title>{data.article?.title}</title>
  <meta name="description" content={data.article?.title} />
</svelte:head>

<main class="mb-auto w-9/10 mx-auto">
  <article class="prose">
    <h1 class="pt-10 pb-10">{data.article?.title}</h1>
    <div>{@html data.article?.body}</div>
  </article>
</main>