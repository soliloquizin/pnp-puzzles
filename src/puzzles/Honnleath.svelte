<script lang="ts">
import { onMount } from "svelte";
import PuzzleHeader from "../puzzleHeader.svelte";
import Celebration from "../Celebration.svelte";

	let isSolved: Boolean = false;

	function handleClick(e: MouseEvent) {
		const empty: HTMLElement = document.querySelector('.tile-empty');
		const emptyId: number = parseInt(empty.id.split('-')[1]);
		const el = e.target as HTMLElement;
		const elId: number = parseInt(el.id.split('-')[1]);

		if (
			elId + 1 === emptyId ||
			elId - 1 === emptyId ||
			elId + 5 === emptyId ||
			elId - 5 === emptyId
		) {
			const elClass: string = Array.from(el.classList)
																	 .find(cl => cl.startsWith('tile-'));
			empty.classList.toggle('tile-empty');
			empty.classList.toggle(elClass);
			el.classList.toggle(elClass);
			el.classList.toggle('tile-empty');
		}
		calcEnergy();
	}

	function calcEnergy() {
		// remove all "energized" classes
		for (const tile of document.querySelectorAll('div.tile').entries()) {
			tile[1].classList.remove('energized');
		}

		// starting from 1st tile, follow route
		const first = document.querySelector('#tile-1') as HTMLElement;
		first.classList.add('energized');
		calcNextEnergizedTile(first);

		// check if end is energized
		const last = document.getElementById('tile-25');
    const end = document.getElementById('tile-end');
    if (last.classList.contains('tile-right') && last.classList.contains('energized')) {
			end.classList.add('energized');
			isSolved = true;
    } else {
			end.classList.remove('energized');
			isSolved = false;
    }
	}

	function calcNextEnergizedTile(tile: HTMLElement) {
		const tileClass: string = Array.from(tile.classList)
																	 .find(cl => cl.startsWith('tile-'));
		const tileId: number = parseInt(tile.id.split('-')[1]);
		let nextTile: HTMLElement = null
		switch (tileClass) {
			case 'tile-up': {
				// if tile is in top row, end chain
				if (tileId > 5) {
					// get tile above
					nextTile = document.querySelector('#tile-' + (tileId - 5)) as HTMLElement;
				}
				break;
			}
			case 'tile-right': {
				// if tile is on the right end of the grid, end chain
				if (tileId % 5 !== 0) {
					// get tile to the right
					nextTile = document.querySelector('#tile-' + (tileId + 1)) as HTMLElement;
				}
				break;
			}
			case 'tile-down': {
				// if tile is in the bottom row, end chain
				if (tileId < 21) {
					// get tile below
					nextTile = document.querySelector('#tile-' + (tileId + 5)) as HTMLElement;
				}
				break;
			}
			case 'tile-left': {
				// if tile is on the left end of the grid, end chain
				if (tileId % 5 !== 1) {
					// get tile to the left
					nextTile = document.querySelector('#tile-' + (tileId - 1)) as HTMLElement;
				}
				break;
			}
		}
		if (nextTile != null && !nextTile.classList.contains('energized')) {
			nextTile.classList.add('energized');
			calcNextEnergizedTile(nextTile);
		}
	}

	onMount(async () => {
		calcEnergy();
	});
</script>

<PuzzleHeader puzzleName={"Honnleath"} />
<section>
	<div id="grid-wrapper">
		<div id="tile-start" class="energized"></div>
		<div id="grid">
			<div class="row">
				<div class="tile tile-right" id="tile-1" on:click={handleClick}></div>
				<div class="tile tile-down" id="tile-2" on:click={handleClick}></div>
				<div class="tile tile-up" id="tile-3" on:click={handleClick}></div>
				<div class="tile tile-left" id="tile-4" on:click={handleClick}></div>
				<div class="tile tile-up" id="tile-5" on:click={handleClick}></div>
			</div>
			<div class="row">
				<div class="tile tile-empty" id="tile-6" on:click={handleClick}></div>
				<div class="tile tile-right" id="tile-7" on:click={handleClick}></div>
				<div class="tile tile-up" id="tile-8" on:click={handleClick}></div>
				<div class="tile tile-down" id="tile-9" on:click={handleClick}></div>
				<div class="tile tile-left" id="tile-10" on:click={handleClick}></div>
			</div>
			<div class="row">
				<div class="tile tile-up" id="tile-11" on:click={handleClick}></div>
				<div class="tile tile-up" id="tile-12" on:click={handleClick}></div>
				<div class="tile tile-left" id="tile-13" on:click={handleClick}></div>
				<div class="tile tile-right" id="tile-14" on:click={handleClick}></div>
				<div class="tile tile-up" id="tile-15" on:click={handleClick}></div>
			</div>
			<div class="row">
				<div class="tile tile-down" id="tile-16" on:click={handleClick}></div>
				<div class="tile tile-down" id="tile-17" on:click={handleClick}></div>
				<div class="tile tile-right" id="tile-18" on:click={handleClick}></div>
				<div class="tile tile-left" id="tile-19" on:click={handleClick}></div>
				<div class="tile tile-right" id="tile-20" on:click={handleClick}></div>
			</div>
			<div class="row">
				<div class="tile tile-left" id="tile-21" on:click={handleClick}></div>
				<div class="tile tile-down" id="tile-22" on:click={handleClick}></div>
				<div class="tile tile-down" id="tile-23" on:click={handleClick}></div>
				<div class="tile tile-right" id="tile-24" on:click={handleClick}></div>
				<div class="tile tile-left" id="tile-25" on:click={handleClick}></div>
			</div>
		</div>
		<div id="tile-end"></div>
	</div>
	{#if isSolved === true}
		<Celebration />
	{/if}
</section>

<style>
	/* @todo get rid of global-styles */
	section {
		min-width: 830px;
	}
	#grid-wrapper {
		width: 830px;
		height: 580px;
		margin: 0 auto;
		position: relative;
	}
	#grid {
		width: 600px;
		margin: 0 auto;
	}
	.row {
		display: flex;
		justify-content: space-evenly;
		margin: 15px 0;
	}
	.tile {
		height: 100px;
		width: 100px;
		outline: 1px solid grey;
	}
	.tile-empty {
		opacity: 0;
	}
	.tile-left {
		background: url('/assets/tile-left.png');
	}
	:global(.tile-left.energized) {
		background: url('/assets/energy.png') no-repeat center, url('/assets/tile-left.png');
	}
	.tile-right {
		background: url('/assets/tile-right.png');
	}
	:global(.tile-right.energized) {
		background: url('/assets/energy.png') no-repeat center, url('/assets/tile-right.png');
	}
	.tile-up {
		background: url('/assets/tile-up.png');
	}
	:global(.tile-up.energized) {
		background: url('/assets/energy.png') no-repeat center, url('/assets/tile-up.png');
	}
	.tile-down {
		background: url('/assets/tile-down.png');
	}
	:global(.tile-down.energized) {
		background: url('/assets/energy.png') no-repeat center, url('/assets/tile-down.png');
	}
	#tile-start, #tile-end {
		height: 100px;
		width: 100px;
		background: url('/assets/tile-end.png');
		position: absolute;
	}
	#tile-start {
		top: 0;
		left: 10px;
	}
	#tile-end {
		bottom: 20px;
		right: 10px;
	}
	#tile-start.energized, :global(#tile-end.energized) {
		background: url('/assets/energy.png') no-repeat center, url('/assets/tile-end.png');
	}
</style>