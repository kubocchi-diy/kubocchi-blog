<script lang="ts">
  import { blogMetaData } from '$lib/blogMetaData';
  import '../styles/global.css';
</script>

<div class="flex flex-col h-screen justify-between">
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a href="/" class="btn btn-ghost text-xl">{blogMetaData.blogTitle}</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><a href="https://kubocchi-blog.onrender.com/">くぼっちアート</a></li>
        <li><a href="https://www.yahoo.co.jp">くぼっちゲームズ</a></li>
      </ul>
    </div>
  </div>
  
  <slot />
  
  <footer class="footer footer-center bg-base-300 text-base-content p-4">
    <aside>
      <p>Copyright © {new Date().getFullYear()} - All right reserved by kubocchi</p>
    </aside>
  </footer>
</div>
