<script lang="ts">
//   import "../assets/styles/global.css";
  import Header from "$lib/components/Header.svelte";
  import Container from "$lib/components/Container.svelte";
  import Content from "$lib/components/Content.svelte";
  import Footer from "$lib/components/Footer.svelte";

  import '../app.css';
</script>

<Container>
  <Header />
  <Content>
    <slot />
  </Content>
  <Footer />
</Container>
