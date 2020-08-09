<script lang="ts">
  import PuzzleHeader from "../puzzleHeader.svelte";
  import Celebration from "../Celebration.svelte";

  type Anagram = {
    solution: string, // capitalized passcode
    letters: string[]  // array of letters in starting order
    space: number  // index; before this letter, there should be a space
  }

  const help: string = `
    Select the letters in the right order to find the passcode.
    You're looking for a single word.
  `;
  const door: Anagram = {
    solution: 'ENTRANCE',
    letters: ['E', 'A', 'R', 'N', 'C', 'E', 'N', 'T'],
    space: 4
  };
  const chest: Anagram = {
    solution: 'TREASURE',
    letters: ['U', 'S', 'E', 'T', 'E', 'R', 'R', 'A'],
    space: 3
  };
  /* @todo: more anagrams */

  /* @todo: make anagram-selection-view when anagram is null */

  let anagram: Anagram = chest;
  let guess: number[] = [];
  let isSolved: Boolean = false;

  function handleStartClick(e: MouseEvent) {
    const card = (e.target as HTMLElement);
    const dataValue = parseInt(card.attributes['data-value'].value);
    const isUsed = card.classList.toggle('used');
    if (isUsed) {
      guess = [...guess, dataValue];
      if (guess.length === anagram.letters.length) {
        let word: string = "";
        for (var letter of guess) {
          word += anagram.letters[letter];
        }
        if (word === anagram.solution) {
          isSolved = true;
        } else {
          isSolved = false;
          /* @todo: show player that guess is wrong */
          console.log("TRY AGAIN");
        }
      }
    } else {
      guess = guess.filter((index) => index !== dataValue);
      isSolved = false;
    }
  }

</script>

<PuzzleHeader puzzleName={"Anagram"} puzzleHelp={help} />
<section>
  <div>
    {#each anagram.letters as letter, i}
      {#if i === anagram.space}
        <span class="space"></span>
      {/if}
      <span class="start"
            on:click={handleStartClick}
            data-value={i}>{letter}</span>
    {/each}
  </div>
  <div id="solution">
    {#each guess as index}
      <span>{anagram.letters[index]}</span>
    {/each}
  </div>
  {#if isSolved === true}
		<Celebration />
	{/if}
</section>

<style>
  section {
    margin-top: 50px;
  }
  section>div {
    display: flex;
    justify-content: center;
  }
  .space {
    width: 50px;
  }
  .start {
    padding: 25px 20px;
    border: 1px solid lightgrey;
    margin: 0 5px;
    cursor: pointer;
  }
  :global(.used) {
    background: lightgrey;
  }
  #solution {
    margin-top: 50px;
    font-size: 2em;
  }
</style>
