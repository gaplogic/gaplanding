<section id="welcome" class="col fcenter fill">
	<article class="col fcenter fill">
		<p class="tcenter title">¿ESTÁS BUSCANDO?</p>
		<h1 class="tcenter">
			<b>marketing</b> digital
			<br />
			redes <b>sociales</b>
			<br />
			<b>branding</b>
			<br />
			optimización <b>web</b>
		</h1>

		<a href="/#bestSeller">↓</a>
	</article>
</section>

<style lang="postcss">
	#welcome {
		max-height: 90%;
		background-image: radial-gradient(var(--c-alt-800), var(--c-neutral-900));
	}

	article {
		position: relative;
		background-image: url('/shapes-color.svg');
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		background-attachment: fixed;
		gap: 1em;
		color: var(--c-neutral);

		& p {
			color: var(--c-accent);
			letter-spacing: 2px;
		}

		& h1 {
			background-image: var(--diagonal-gradient);
			background-clip: text;
			font-size: clamp(40px, 10vw, 80px);

			& b {
				color: transparent;
				text-shadow: 0 0 30px hsl(var(--a-accent), 0.2);
			}
		}

		& a {
			color: var(--c-neutral);
			font-size: 40px;
		}
	}
</style>
