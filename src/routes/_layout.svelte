<script context="module">
  export async function preload(page, session) {
    const { locale } = session;
    const def = "en";

    if (locale !== "es") return { locale: def };
    else return { locale: "es" };
  }
</script>

<script>
  import { slide } from "svelte/transition";
  import { l } from "./_helpers/stores";
  import Nav from "./_components/Nav.svelte";

  export let segment, locale;
  $l = locale;

  console.log(`User language is ${locale.toUpperCase()}`);
</script>

<svelte:head>
  <html lang={$l} />
</svelte:head>

<main>
  <Nav {segment} />

  {#key segment}
    <div class="scroll" in:slide>
      <slot />
    </div>
  {/key}
</main>

<style lang="scss" global>
  @import "../../reset";
  @import "../../node_modules/verdu/verdu";

  .scroll {
    height: calc(100% - 70px) !important;
    padding: 1.5em;
  }
</style>
