<script lang="ts">
  import type { PageData } from './$types'
	import { format } from 'fecha';
  import { IconCoffee, IconBook, IconDeviceGamepad } from '@tabler/icons-svelte';
  export let data: PageData
</script>

<svelte:head>
  <title>くぼっちブログ: ホーム</title>
  <meta name="description" content="kubocchi blog home" />
</svelte:head>

<main class="mb-auto w-9/10 mx-auto">

  <div class="hero">
    <div class="hero-content text-center">
      <div class="max-w-md pt-5 pb-10">
        <div class="grid grid-flow-col gap-10">
          <a href="https://www.yahoo.co.jp">
            <IconCoffee size={45} />
          </a>
          <a href="https://www.yahoo.co.jp">
            <IconBook size={45} />
          </a>
          <a href="https://www.yahoo.co.jp">
            <IconDeviceGamepad size={45} />
          </a>
        </div>
      </div>
    </div>
  </div>

  {#each data.articles as article (article._id)}
    <div class="py-6 flex flex-row-reverse gap-6 md:gap-10 items-start">
      {#if article.publishedAt}
        <div class="card-body">
          <p class="text-sm text-gray-500">{format(new Date(article.publishedAt), "MMMM DD, YYYY")}</p>
        </div>
      {/if}
      <!-- <figure>
        <img src={post.imageUrl} alt={post.title} class="object-cover h-48 w-full" />
      </figure> -->
      <div class="flex flex-col gap-4">
        <div>
          <h2 class="text-2xl font-bold">
            <a href={`/articles/${article.slug}`} class="text-xl hover:text-blue-500">{article.title}</a>
          </h2>
        </div>
        <p class="text-sm text-base-content/70">{article.description}</p>
      </div>
    </div>
  {/each}
</main>
