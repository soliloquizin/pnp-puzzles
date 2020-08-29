<script lang="ts">
  import { link } from "svelte-spa-router";

  function toggleInfo(id: string) {
    const el = document.getElementById(id);
    if (el.style.display === "none") {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  }
</script>

<header>
  <h1>GM Cheatsheet</h1>
  <nav>
    <a href="/" use:link>back to menu</a>
  </nav>
  <p>Hello there, fellow GM!</p>
  <p>Here you can find solutions, implementation ideas and difficulty ratings for the puzzles provided on this website. Click on a puzzle in the list to show/hide further information about it.</p>
</header>
<section>
  <ul>
    <li>
      <div on:click="{() => toggleInfo("honnleath")}"
           class="puzzle">
        <h2>Honnleath</h2>
        <p class="info">This puzzle was inspired by a puzzle in the video game Dragon Age Origins located in the village Honnleath.</p>
      </div>
      <div id="honnleath"
           class="info"
           style="display: none">
        <h3>Difficulty</h3>
        <p>fairly easy to moderate</p>
        <h3>Solution</h3>
        <p>This puzzle can be solved in multiple ways. Here's one way to solve it:</p>
        <ul>
          <li>select the tile to the right of the empty space</li>
          <li>select the tile to the bottom of the empty space</li>
          <li>select the tile to the bottom of the empty space</li>
          <li>select the tile to the bottom of the empty space</li>
          <li>select the tile to the right of the empty space</li>
          <li>select the tile to the top of the empty space</li>
          <li>select the tile to the top of the empty space</li>
          <li>select the tile to the top of the empty space</li>
          <li>select the tile to the left of the empty space</li>
          <li>select the tile to the bottom of the empty space</li>
          <li>select the tile to the bottom of the empty space</li>
          <li>select the tile to the bottom of the empty space</li>
          <li>select the tile to the right of the empty space</li>
          <li>select the tile to the right of the empty space</li>
          <li>select the tile to the top of the empty space</li>
          <li>select the tile to the right of the empty space</li>
          <li>select the tile to the bottom of the empty space</li>
          <li>select the tile to the left of the empty space</li>
          <li>select the tile to the top of the empty space</li>
          <li>select the tile to the top of the empty space</li>
          <li>select the tile to the right of the empty space</li>
          <li>select the tile to the bottom of the empty space</li>
          <li>select the tile to the bottom of the empty space</li>
          <li>select the tile to the left of the empty space</li>
          <li>select the tile to the top of the empty space</li>
        </ul>
        <h3>Set it up</h3>
        <p>You can use it as a locking mechanism for a chest, hidden compartment or similar things.</p>
      </div>
    </li>
    <li>
      <div on:click="{() => toggleInfo("anagram")}"
           class="puzzle">
        <h2>Anagram</h2>
      </div>
      <div id="anagram"
           class="info"
           style="display: none">
        <h3>Difficulty</h3>
        <p>moderate to challenging - this highly depends on the setup</p>
        <h3>Solution</h3>
        <ul>
          <li>1 - barred door: ENTRANCE</li>
          <li>2 - treasure chest: TREASURE</li>
          <li>3 - box trap: TRICKSTER</li>
        </ul>
        <h3>Set it up</h3>
        <ul>
          <li>It could be a secret password that was mentioned in a letter like this.</li>
          <li>You can use it as a locking mechanism for a door/chest/trap created by a (mad) mage.</li>
        </ul>
      </div>
    </li>
    <li>
      <div on:click="{() => toggleInfo("valves")}"
           class="puzzle">
        <h2>Valves</h2>
        <p class="info">This puzzle was inspired by <a href="https://www.youtube.com/watch?v=oawWOS1_qvg" target="_blank">Wally DM</a>.</p>
      </div>
      <div id="valves"
           class="info"
           style="display: none">
        <h3>Difficulty</h3>
        <p>depending on the setup easy to difficult</p>
        <h3>Solution</h3>
        <p>The correct directions are those of the konami code: up, up, down, down, left, right, left, right</p>
        <h3>Setup</h3>
        <p>The valves regulate pipes that pump a gas of your choosing into a room the players are locked in or need to get something from. To not send them unprepared, you can let
          them find a riddle or short story where they can find hints for the eight directions needed. In Wally DMs video you can find his suggestion for a short story, below you can
          find the german story I provided my players with.</p>
        <blockquote>
          Es war einmal ein kleiner Vogel, der wollte <em>hoch</em> hinaus.<br>
          Seine Flügel trugen ihn nach <em>oben</em>, über's Wolkendach herraus.<br>
          Das Meer wollte er nun erkunden und so stieg er wieder <em>hinab</em>,<br>
          verwandelte sich in einen Fisch und suchte die <em>Tiefen</em> der See ab.<br>
          <br>
          Erst durchschwamm er neugierig den gesamten <em>Westen</em>,<br>
          dann schwamm er gen <em>Osten</em> um seine neuen Flossen zu testen.<br>
          Von der Hexe ge<em>linkt</em>, blieb er ein Fischh, es gab kein Zurück;<br>
          das war ihm nur <em>Recht</em>, was für ein großes Glück!
        </blockquote>
      </div>
    </li>
  </ul>
</section>

<style>
  header {
    position: relative;
    min-width: 500px;
  }
  h1 {
    text-align: center;
    margin-bottom: 35px;
  }
  nav {
    position: absolute;
    top: 13px;
    /*left: 25px*/
  }
  section {
    max-height: 75vh;
    overflow-y: scroll;
  }
  .puzzle {
    cursor: pointer;
  }
  h2 {
    margin-bottom: 5px;
    font-size: 1.2em;
  }
  p.info {
    margin: 0;
    font-style: italic;
  }
  h3 {
    font-size: 1em;
  }
  div.info {
    border: 1px solid darkgray;
    padding: 0 15px 15px;
    margin-top: 15px;
  }
  div.info p:last-child {
    margin-bottom: 0;
  }
  blockquote {
    margin: 25px 0 10px 25px;
    padding-left: 15px;
    border-left: 10px solid lightblue;
  }
</style>