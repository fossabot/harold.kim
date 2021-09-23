<template>
  <div class="menu-left">
    <div id="nav">
      <a
        class="notranslate"
        :class="{
          'router-link-exact-active':
            (menu.link == route.path || menu.link + 'index.html' == route.path) ||
            (menu.link == '/blog/' && route.path.match(/^\/blog/)),
        }"
        :href="menu.link"
        :key="menu"
        v-for="menu in theme.nav"
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