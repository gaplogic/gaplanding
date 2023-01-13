<script>
	import '$lib/classes/all.css';
	import Nav from '../lib/components/Nav.svelte';
</script>

<main class="viewport">
	<Nav />

	<div class="scroll">
		<slot />
	</div>
</main>

<style lang="postcss">
	:root {
		--diagonal-gradient: linear-gradient(
			-30deg,
			var(--c-accent) 0%,
			var(--c-accent-blue) 50%,
			var(--c-accent-yellow) 50%,
			var(--c-accent) 100%
		);
	}

	main {
		background-color: var(--c-neutral-100);
	}
</style>
