<script>
	import PriceCard from '../components/PriceCard.svelte';

	const cards = [
		{
			title: /* html */ `Página web<br />todo incluido`,
			description: /* html */ `Pago inicial 295€. Imputestos no incluidos`,
			price: 99
		},
		{
			title: /* html */ `Posicionamiento <br /> local Google`,
			description: /* html */ `El 85% de las búsquedas en Google son para encontrar comercio local`,
			price: 99
		}
	];
</script>

<section id="bestSeller" class="col acenter xfill">
	<p class="tcenter title">LO MÁS VENDIDO</p>

	<main class="row fcenter">
		{#each cards as { title, description, price }}
			<PriceCard {title} {description} {price} />
		{/each}
	</main>
</section>

<style lang="postcss">
	#bestSeller {
		margin-top: -10%;
	}

	p {
		color: var(--c-accent);
		letter-spacing: 2px;
	}

	main {
		gap: 2em;
	}
</style>
