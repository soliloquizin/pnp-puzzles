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
<hr>

<style>
  hr {
    border: 1px solid lightgrey;
  }
  header {
    min-width: 500px;
    max-width: 1000px;
    position: relative;
  }
  h1 {
    text-align: center;
    margin-bottom: 35px;
  }
  nav {
    position: absolute;
    top: 13px;
    left: 25px
  }
</style>