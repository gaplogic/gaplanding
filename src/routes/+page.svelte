<script>
	import { meta } from '$lib/routes';
	import BestSeller from '../lib/sections/BestSeller.svelte';
	import Welcome from '../lib/sections/Welcome.svelte';
	const { title, description: content } = meta.inicio;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" {content} />
</svelte:head>

<Welcome />
<BestSeller />

<style lang="postcss">
</style>
