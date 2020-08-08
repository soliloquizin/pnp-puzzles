<script lang="ts">
  import { link } from "svelte-spa-router";
  import type { Contributor } from "./types/general";

  export let puzzleName = "";
  export let puzzleHelp = "";
  export let contributor: Contributor = null;
</script>

<header>
  <h1>{puzzleName}</h1>
  <nav>
    <a href="/" use:link>back to menu</a>
  </nav>
  {#if puzzleHelp.length > 0}
  <div>
    <span>💡</span>
    <p>{puzzleHelp}</p>
  </div>
  {/if}
  {#if contributor != null}
    <p id="contributor">made by <a href="{contributor.link}" target="_blank">{contributor.name}</a></p>
  {/if}
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
  div {
    width: 85%;
    margin: 20px auto;
    display: flex;
    align-items: center;
  }
  span {
    margin-right: 20px;
    font-size: 1.5em;
  }
  p {
    font-style: italic;
    margin: 0;
  }
  #contributor {
    font-size: 0.9em;
    text-align: right;
  }
</style>
