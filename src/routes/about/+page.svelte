<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;

</script>

<svelte:head>
  <title>くぼっちブログ: About</title>
  <meta name="description" content="About kubocchi-blog" />
</svelte:head>

<main>
  <div class="text-column">
    {#each data.authors as author (author._id)}
      <p>{author.fullName}</p>
      <div>{@html author.biography}</div>
    {/each}
  </div>
</main>
