<script>
	import Logo from '../svg/Logo.svelte';
	import { routes } from '$lib/routes';
</script>

<header class="row jcenter xfill">
	<nav class="row jbetween acenter xfill">
		<a href="/">
			<Logo width="200px" fill="#fff" />
		</a>

		<ul class="row">
			{#each routes as { title, href }}
				<li>
					<a {href}>{title}</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style lang="postcss">
	header {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
	}

	nav {
		max-width: 1200px;
		padding: 2.5em;

		& ul {
			gap: 3em;
		}
	}
</style>
