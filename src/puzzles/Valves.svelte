<script lang="ts">
  import { onDestroy } from 'svelte';
  import PuzzleHeader from "../puzzleHeader.svelte";
  import Celebration from "../Celebration.svelte";

  enum Direction {
		Up = 0,
		Right = 1,
		Down = 2,
		Left = 3,
	}

  const help: string = `
    The arrows on the valves need to look into the right direction, turn each to face in its intended direction.
    Turn a valve by clicking on it; each click will turn a valve for 90°.
  `;

  const valves: Direction[] = [3, 3, 3, 3, 3, 3, 3, 3];
  const solution: Direction[] = [0, 0, 2, 2, 3, 1, 3, 1];
  let isSolved: Boolean = false;

  function handleClick(e: MouseEvent) {
    const el = e.target as HTMLElement;
    const index = el.parentElement.attributes['data-value'].value;
    switch(valves[index]) {
      case Direction.Up:
        valves[index] = Direction.Right;
        break;
      case Direction.Right:
        valves[index] = Direction.Down;
        break;
      case Direction.Down:
        valves[index] = Direction.Left;
        break;
      case Direction.Left:
        valves[index] = Direction.Up;
        break;
    }

    if(JSON.stringify(valves) == JSON.stringify(solution)) {
      isSolved = true;
    } else {
      isSolved = false;
    }
  }

</script>

<PuzzleHeader puzzleName={"Valves"} puzzleHelp={help} />
<section>
  <div id="valves">
    {#each valves as valve, i}
      <div on:click={handleClick}
          data-value={i}>
        <img src="/assets/valves/ventil.png"
             alt="silver-grey valve with 4 handles" />
        <img src="/assets/valves/marker.png"
             alt="blue arrow marking on of the ventil's handles"
             class={'turn-' + valve} />
        <span>{i + 1}</span>
      </div>
    {/each}
  </div>
  {#if isSolved === true}
		<Celebration />
	{/if}
</section>

<style>
  #valves > div {
    display: inline-block;
    width: 250px;
    height: 250px;
    position: relative;
  }
  #valves img {
    position: absolute;
    left: 5px;
    top: 5px;
    width: 240px;
  }
  #valves span {
    position: absolute;
    left: 121px;
    top: 113px;
    font-weight: bold;
  }

  .turn-1 {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  .turn-2 {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  .turn-3 {
    -webkit-transform: rotate(270deg);
    -moz-transform: rotate(270deg);
    -o-transform: rotate(270deg);
    -ms-transform: rotate(1270deg);
    transform: rotate(270deg);
  }
</style>
