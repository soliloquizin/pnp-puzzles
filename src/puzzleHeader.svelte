<script>
  import { link } from "svelte-spa-router";

  export let puzzleName = "";
</script>

<header>
  <h1>{puzzleName}</h1>
  <nav>
    <a href="/" use:link>zum Menü</a>
  </nav>
</header>

<style>
  header {
    min-width: 500px;
    max-width: 1000px;
    position: relative;
  }
  h1 {
    text-align: center;
  }
  nav {
    position: absolute;
    top: 40px;
    left: 25px
  }
</style>