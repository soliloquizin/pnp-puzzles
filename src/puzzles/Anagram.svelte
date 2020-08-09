<script lang="ts">
  import PuzzleHeader from "../puzzleHeader.svelte";
  import Celebration from "../Celebration.svelte";

  type Anagram = {
    solution: string, // capitalized passcode
    letters: string[]  // array of letters in starting order
    space: number  // index; before this letter, there should be a space
  }
  type AnagramListEntry = {
    anagram: Anagram,
    icon: string,
    alt: string
  }

  const help: string = `
    Choose your anagram by clicking on an icon; to solve it select the letters
    in the right order to find the passcode. You're looking for a single english word.
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
  const trap: Anagram = {
    solution: 'TRICKSTER',
    letters: ['C', 'R', 'T', 'S', 'T', 'R', 'I', 'K', 'E'],
    space: 3
  };

  const anagrams: AnagramListEntry[] = [
    {anagram: door, icon: 'barred-door.png', alt: 'icon of a barred double door'},
    {anagram: chest, icon: 'treasure-chest.png', alt:'icon of an open treasure chest with coins, a crown and a necklace'},
    {anagram: trap, icon: 'box-trap.png', alt:'icon of a box trap'}
  ];

  let anagram: Anagram = null;
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
          document.getElementById('solution').classList.add('shake');
        }
      }
    } else {
      guess = guess.filter((index) => index !== dataValue);
      isSolved = false;
      document.getElementById('solution').classList.remove('shake');
    }
  }

  function handleSelectionClick(e: MouseEvent) {
    const icon = (e.target as HTMLElement).parentElement;
    const dataIndex = parseInt(icon.attributes['data-index'].value);

    anagram = anagrams[dataIndex].anagram;
  }

  function handleBackClick() {
    anagram = null;
    guess = [];
  }
</script>

<PuzzleHeader puzzleName={"Anagram"} puzzleHelp={help} />
<section>
  {#if anagram === null}
    <div>
      {#each anagrams as puzzle, i}
        <span data-index={i}
              class="selection"
              on:click={handleSelectionClick}>
          <img src="/assets/anagram/{puzzle.icon}" alt="{puzzle.alt}">
        </span>
      {/each}
    </div>
    <p class="copyright">
      Icons made by <a href="http://delapouite.com" target="_blank">Delapouite</a>
      & <a href="https://game-icons.net" target="_blank">Skoll</a>.
      Available on <a href="https://game-icons.net" target="_blank">game-icons.net</a>.
    </p>
  {:else}
    <p on:click={handleBackClick}
          id="back">back to selection</p>
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
  .selection {
    margin: 10px;
    cursor: pointer;
  }
  .selection>img {
    width: 150px;
    height: 150px;
  }
  .copyright {
    text-align: center;
    margin-top: 50px;
    font-size: 0.9em;
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
  #back {
    margin: 0 0 50px 25px;
    color: rgb(0,80,160);
    cursor: pointer;
  }
  #back:hover {
    text-decoration: underline;
  }
  :global(.shake) {
    -webkit-animation-name: shake;
    animation-name: shake;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  @-webkit-keyframes shake {
    0%, 100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    10%, 30%, 50%, 70%, 90% {
      -webkit-transform: translate3d(-10px, 0, 0);
      transform: translate3d(-10px, 0, 0);
    }
    20%, 40%, 60%, 80% {
      -webkit-transform: translate3d(10px, 0, 0);
      transform: translate3d(10px, 0, 0);
    }
  }
  @keyframes shake {
    0%, 100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    10%, 30%, 50%, 70%, 90% {
      -webkit-transform: translate3d(-10px, 0, 0);
      transform: translate3d(-10px, 0, 0);
    }
    20%, 40%, 60%, 80% {
      -webkit-transform: translate3d(10px, 0, 0);
      transform: translate3d(10px, 0, 0);
    }
  }
</style>
