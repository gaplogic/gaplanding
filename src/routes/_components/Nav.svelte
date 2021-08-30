<script>
  import { l } from "../_helpers/stores";
  import { content } from "./Nav.content";

  export let segment;
  const ui = content[$l];
</script>

<nav class="row jbetween acenter xfill">
  <a class="logo row acenter yfill" href=".">
    <img class="yhalf" src="logo.svg" alt={ui.logo} />
  </a>

  <ul class="row yfill">
    {#each ui.pages as page}
      <li class="yfill">
        <a class="row acenter yfill" class:active={segment === (page.slug === "." ? undefined : page.slug)} href="/{page.slug}">
          {page.title}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  nav {
    height: 60px;
    background: $white;
    border-bottom: 1px solid $border;

    a {
      padding: 0 1.5em;
    }

    .active {
      border-bottom: 2px solid $pri;
    }
  }
</style>
