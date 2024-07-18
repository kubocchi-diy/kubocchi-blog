<script lang="ts">
	import type { Article } from "$lib/types/article";
  import { format } from "fecha";

  export let post: Article;

</script>

<div class="py-6 flex flex-row-reverse gap-6 md:gap-10 items-start">
  {#if post.publishedAt}
    <div class="card-body">
      <p class="text-sm text-gray-500">{format(new Date(post.publishedAt), "MMMM DD, YYYY")}</p>
    </div>
  {/if}
  <!-- <figure>
    <img src={post.imageUrl} alt={post.title} class="object-cover h-48 w-full" />
  </figure> -->
  <div class="flex flex-col gap-4">
    <h2 class="text-2xl font-bold">
      <a href={`/articles/${post.slug}`} class="text-xl hover:text-blue-500">{post.title}</a>
    </h2>
    <p class="text-sm text-base-content/70">{post.description}</p>
    <div class="card-actions justify-end">
      <a href={`/articles/${post.slug}`} class="btn btn-primary">Read more</a>
    </div>
  </div>
</div>