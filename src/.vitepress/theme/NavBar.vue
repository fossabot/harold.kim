<template>
  <div class="menu-left">
    <div id="nav">
      <a
        v-bind:class="{
          'router-link-exact-active':
            (menu.link == route.path || menu.link + 'index.html' == route.path) ||
            (menu.link == '/blog/' && route.path.match(/^\/blog/)),
        }"
        v-bind:href="menu.link"
        v-for="menu in theme.nav"
        v-bind:key="menu"
      >
        {{ menu.text }}<br />
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { useRoute, useData } from "vitepress";

  const { theme } = useData()
  const route = useRoute()
</script>