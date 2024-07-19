<script lang="ts">
  import { blogMetaData } from '$lib/blogMetaData';
	import { IconBrandInstagram, IconBrandXFilled, IconBrandYoutubeFilled, IconMenu2 } from '@tabler/icons-svelte';
  import '../styles/global.css';

</script>

<div class="flex flex-col h-screen justify-between">
  <div class="navbar bg-base-100 bg-neutral text-neutral-content">
    <div class="flex-1">
      <a href="/" class="btn btn-ghost text-xl">{blogMetaData.blogTitle}</a>
    </div>
    <div class="flex-none block md:block">
      <ul class="menu menu-horizontal px-1 text-xs md:text-base">
        <li><a href="https://kubocchi-blog.onrender.com">くぼっちゲームズ</a></li>
      </ul>
    </div>
  </div>
  
  <slot />
  
  <footer class="footer bg-neutral text-neutral-content items-center p-4 text-sm md:text-base">
    <aside class="grid-flow-col items-center">
      <p>Copyright © {new Date().getFullYear()} - All right reserved by kubocchi</p>
    </aside>
    <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <div class="grid grid-flow-col gap-4">
        <a href="https://www.yahoo.co.jp">
          <IconBrandXFilled />
        </a>
        <a href="https://www.yahoo.co.jp">
          <IconBrandInstagram />
        </a>
        <a href="https://www.yahoo.co.jp">
          <IconBrandYoutubeFilled />
        </a>
    </nav>
  </footer>
</div>
