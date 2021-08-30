<script context="module">
  export async function preload(page, session) {
    const req = await this.fetch("./index.db");

    if (!req.ok) throw await req.text();
    const res = await req.json();

    const { posts } = res;
    return { posts };
  }
</script>

<script>
  import { fade } from "svelte/transition";
  import { l } from "./_helpers/stores";
  import { content } from "./_content";

  const ui = content[$l];

  const sumNum = [10, 12, 14, 16][Math.floor(Math.random() * 4)];
  const subNum = [4, 8, 2, 6][Math.floor(Math.random() * 4)];
  const total = ((1 + sumNum) * 2 - subNum) / 2 - 1;
  let currState = 0;

  const states = [
    "Hola, somos Gaplogic, una empresa de marketing digital y diseño web.",
    "Ahora te vamos a pedir que pienses en un número, el que tu quieras.",
    `¿Lo tienes? bien, ahora sumale ${sumNum}, multiplicalo por 2 y restale ${subNum}`,
    "Por último, dividelo entre 2 y restale el número que habias pensado",
    `¿Te ha dado ${total}?`,
    "No es magia, es marketing y matematicas, ¡y ambas se nos dan de lujo!",
  ];

  function nextState() {
    currState += 1;
  }

  function goContact() {
    alert("Próximamente");
  }
</script>

<svelte:head>
  <title>{ui.page}</title>
</svelte:head>

<div class="home col fcenter fill">
  <h1 transition:fade>{states[currState]}</h1>

  <div class="cta row xfill">
    {#if currState !== 5}
      <button class="outpri semi" on:click={nextState}>SIGUIENTE</button>
    {:else}
      <button class="outpri semi" on:click={goContact}>CONTACTO</button>
    {/if}
  </div>
</div>

<style lang="scss">
  .home {
    max-width: 900px;
    margin: 0 auto;
  }

  h1 {
    font-size: 4vw;
    margin-bottom: 1em;
  }

  button {
    font-size: 18px;
  }
</style>
