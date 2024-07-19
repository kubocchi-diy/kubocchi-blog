<script lang="ts">
  import type { PageData } from './$types'
	import { format } from 'fecha';
  import { IconCoffee, IconBook, IconDeviceGamepad } from '@tabler/icons-svelte';
  export let data: PageData
</script>

<svelte:head>
  <title>くぼっちブログ</title>
  <meta name="description" content="kubocchi blog home" />
</svelte:head>

<main class="mb-auto w-9/10 mx-auto">

  <div class="hero">
    <div class="hero-content text-center">
      <div class="max-w-md pt-5 pb-10">
        <div class="flex flex-col items-center gap-10">
          <div class="dropdown dropdown-hover">
            <a tabindex="0" href="https://www.yahoo.co.jp">
              <IconCoffee class="w-10 h-10 sm:w-12 sm:h-12" />
            </a>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <div tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <p>喫茶店で作業するのにご支援ください</p>
            </div>
          </div>
          <div class="dropdown dropdown-hover">
            <a tabindex="0" href="https://www.yahoo.co.jp">
              <IconBook class="w-10 h-10 sm:w-12 sm:h-12" />
            </a>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <div tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-60 p-2 shadow">
              <p>知識・ノウハウを身につけるのにご支援ください</p>
            </div>
          </div>
          <div class="dropdown dropdown-hover">
            <a tabindex="0" href="https://www.yahoo.co.jp">
              <IconDeviceGamepad class="w-10 h-10 sm:w-12 sm:h-12" />
            </a>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <div tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-60 p-2 shadow">
              <p>ゲーム開発のためのご支援ください</p>
            </div>
          </div>
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
