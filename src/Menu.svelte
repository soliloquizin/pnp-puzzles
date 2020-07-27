<script>
  import { link }from 'svelte-spa-router';
</script>

<h1>PnP Puzzles</h1>
<div id="intro">
  <p>Just some puzzles I developed to use in my pen & paper campaigns <span>🐉</span>.
    Feel free to use them in yours as well <span>😉</span>.
  </p>
  <p>
    If you find any bugs <span>🐞</span>, you can report them
    <a href="https://github.com/corneliapelech/pnp-puzzles/issues" target="_blank">here</a>.
  </p>
</div>
<nav>
  <a href="/honnleath" use:link>Honnleath</a>
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
  }
  nav a:hover {
    background-color: lightblue;
  }
</style>