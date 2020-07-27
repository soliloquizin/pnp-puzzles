<script>
	import Router from 'svelte-spa-router';

	import routes from './routes';
</script>

<main>
	<Router {routes} />
</main>

<style>
	main {
		max-width: 1000px;
		margin: 0 auto;
	}
</style>