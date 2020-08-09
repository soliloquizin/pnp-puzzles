<script>
  import { link }from 'svelte-spa-router';
</script>

<h1>PnP Puzzles</h1>
<div id="intro">
  <p>Just some puzzles I developed to use in my pen & paper campaigns <span>🐉</span>.
    Feel free to use them in yours as well <span>😉</span>.
  </p>
  <p>
    You have an awesome idea <span>💡</span> for a puzzle I should add? Open an issue on
    <a href="https://github.com/corneliapelech/pnp-puzzles/issues" target="_blank">github</a>
    and add the "new" label or reach out to me on <a href="https://twitter.com/soliloquizin" target="_blank">twitter</a>
    or via <a href="mailto:&#115;&#111;&#108;&#105;&#108;&#111;&#113;&#117;&#105;&#122;&#105;&#110;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;?subject=puzzle idea">email</a>.
  </p>
  <p>
    If you find any bugs <span>🐞</span>, please report them
    <a href="https://github.com/corneliapelech/pnp-puzzles/issues" target="_blank">here</a>.
  </p>
</div>
<nav>
  <a href="/honnleath" use:link>Honnleath</a>
  <a href="/anagram" use:link>Anagram</a>
</nav>

<style>
  h1 {
    text-align: center;
  }
  #intro {
    font-style: italic;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 50px;
  }
  #intro span {
    font-style: normal;
  }
  nav {
    max-width: 400px;
    margin: 0 auto;
  }
  nav a {
    text-align: center;
    display: block;
    padding: 10px;
    background-color: lightcyan;
    margin: 5px 0;
  }
  nav a:hover {
    background-color: lightblue;
  }
</style>
