<script lang="ts">
	let hasFirstTarget: Boolean = false;
	let click1: HTMLElement = null;
	let click2: HTMLElement = null;
	let id1: number = null;

	function handleClick(e: MouseEvent) {
		if (hasFirstTarget) {
			const el = e.target as HTMLElement;
			const elId = parseInt(el.id.split('-')[1]);
			if (
				(elId + 1 === id1) ||
				(elId - 1 === id1) ||
				(elId - 5 === id1) ||
				(elId + 5 === id1)
			) {
				// valid switch
				click2 = el;
				switchTiles();
			} else {
				// invalid switch-attempt
				resetClicks();
			}
		} else {
			click1 = e.target as HTMLElement;
			id1 = parseInt(click1.id.split('-')[1]);
			hasFirstTarget = true;
		}
	}
	function switchTiles() {
		const class1 = Array.from(click1.classList).find(cl => cl.startsWith('tile-'));
		const class2 = Array.from(click2.classList).find(cl => cl.startsWith('tile-'));
		click1.classList.toggle(class1);
		click1.classList.toggle(class2);
		click2.classList.toggle(class2);
		click2.classList.toggle(class1);
		resetClicks();
	}
	function resetClicks() {
		hasFirstTarget = false;
		click1 = null;
		click2 = null;
	}
</script>

<main>
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
</main>

<style>
	main {
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
	.tile-left.energized {
		background: url('/assets/energy.png') no-repeat center, url('/assets/tile-left.png');
	}
	.tile-right {
		background: url('/assets/tile-right.png');
	}
	.tile-right.energized {
		background: url('/assets/energy.png') no-repeat center, url('/assets/tile-right.png');
	}
	.tile-up {
		background: url('/assets/tile-up.png');
	}
	.tile-up.energized {
		background: url('/assets/energy.png') no-repeat center, url('/assets/tile-up.png');
	}
	.tile-down {
		background: url('/assets/tile-down.png');
	}
	.tile-down.energized {
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
	#tile-start.energized, #tile-end.energized {
		background: url('/assets/energy.png') no-repeat center, url('/assets/tile-end.png');
	}
</style>