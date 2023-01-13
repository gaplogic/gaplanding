<script>
	export let title, description, price;
</script>

<article class="col jend">
	<h2>{@html title}</h2>
	<p><small>{@html description}</small></p>

	<aside class="col aend">
		<h3>{price}€</h3>
		<p>al mes</p>
	</aside>
</article>

<style lang="postcss">
	article {
		position: relative;
		width: 450px;
		height: 200px;
		background-color: var(--c-neutral);
		padding: 1em;

		& h2 {
			font-size: clamp(26px, 6vw, 40px);
		}

		& small {
			font-size: 14px;
		}
	}

	aside {
		position: absolute;
		top: 0;
		right: 0;
		background-color: var(--c-alt);
		color: var(--c-neutral);
		clip-path: polygon(100% 0, 0 0, 100% 100%);
		padding: 1em 1em 5em 5em;
	}
</style>
