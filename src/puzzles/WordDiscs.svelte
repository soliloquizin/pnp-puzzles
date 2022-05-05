<script lang="ts">
  import { onDestroy } from 'svelte';
  import PuzzleHeader from "../puzzleHeader.svelte";
  import Celebration from "../Celebration.svelte";
  import { shuffleArray } from "../utils/fisher-yates-shuffle";
  import { getRndInteger } from "../utils/randomInt";

  const help = `
    There are seven discs; on top of each disc is a cover with a small hole
    in it. Underneath you can see through to the base of the disc. Each disc
    is engraved with six letters. Turn the covers of the discs to reveal a
    specific word. But be warned, even though it's possible to build several
    word, the lock only accepts one specific word.
    Turn a lid by clicking on a disc. The lids can only be turned clockwise.
  `;

  let isSolved: Boolean = false;
  let isError: Boolean = false;
  let to = null;

  type Discs = {
    disc1?: string[];
    disc2?: string[];
    disc3?: string[];
    disc4?: string[];
    disc5?: string[];
    disc6?: string[];
    disc7?: string[];
  }

  const words: string[] = [
    "justice",
    "accused",
    "evident",
    "suspect",
    "devoted",
    "closure"
  ];
  let actives: number[] = [];
  let discs: Discs = {};
  for (let discIndex = 0; discIndex < 7; discIndex++) {
    const discBuffer = [];
    for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
      discBuffer.push(words[wordIndex].charAt(discIndex).toUpperCase());
    }
    discs[`disc${discIndex + 1}`] = shuffleArray(discBuffer);
    actives = [...actives, getRndInteger(0, 5)];
  }

  function handleDiscClick(discIndex) {
    actives[discIndex] = actives[discIndex] === 5 ? 0 : actives[discIndex] + 1;
  }
  function solve() {
    let word = '';
    for (let index = 0; index < actives.length; index++) {
      word += discs[`disc${index + 1}`][actives[index]];
    }
    if (word === words[0].toUpperCase()) {
      isSolved = true;
    } else {
      isSolved = false;
      isError = true;
      to = setTimeout(() => {
        isError = false;
        clearTimeout(to);
        to = null;
      }, 350);
    }
  }

  onDestroy(() => {
		clearTimeout(to);
    to = null;
	});
</script>

<PuzzleHeader puzzleName={"Word Discs"} puzzleHelp={help} />
<section>
  {#if isError === true}
    <div id="error">
      <p>WRONG!</p>
    </div>
  {/if}
  <div id="word-discs">
    {#each Object.entries(discs) as [key, value], i}
      <div class="disc-base" on:click={() => {handleDiscClick(i)}}>
        {#each value as letter, j}
          <span class:active={j === actives[i]}>{letter}</span>
        {/each}
      </div>
      {/each}
  </div>
  <button on:click={solve}>activate</button>
  {#if isSolved === true}
		<Celebration />
	{/if}
</section>

<style>
  section {
    position: relative;
  }
  #error {
    z-index: 1;
    background-color: orange;
    position: absolute;
    height: 400px;
    width: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #error p {
    font-size: 10em;
    margin: 0;
  }
  #word-discs {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    height: 400px;
    gap: 0 40px;
  }
  .disc-base {
    width: 200px;
    height: 200px;
    background-color: darkcyan;
    border-radius: 100%;
    position: relative;
    display: inline-block;
    user-select: none;
    cursor: pointer;
  }
  .disc-base:nth-of-type(2), .disc-base:nth-of-type(4), .disc-base:nth-of-type(6) {
    position: relative;
    top: -30px;
    left: 130px;
  }
  .disc-base span {
    position: absolute;
    font-size: 2em;
    width: 1.5em;
    height: 1.5em;
    text-align: center;
    border-radius: 100%;
    visibility: hidden;
  }
  .disc-base span:first-of-type {
    left: 75px;
    top: 5px;
  }
  .disc-base span:nth-of-type(2) {
    right: 20px;
    top: 40px;
  }
  .disc-base span:nth-of-type(3) {
    right: 20px;
    bottom: 45px;
  }
  .disc-base span:nth-of-type(4) {
    left: 75px;
    bottom: 10px;
  }
  .disc-base span:nth-of-type(5) {
    left: 20px;
    bottom: 45px;
  }
  .disc-base span:last-of-type {
    left: 20px;
    top: 40px;
  }
  .disc-base span.active {
    background-color: lightcyan;
    visibility: visible;
  }
  button {
    cursor: pointer;
    display: block;
    margin: 0 auto;
    padding: 15px 25px;
    margin-top: 50px;
  }
</style>