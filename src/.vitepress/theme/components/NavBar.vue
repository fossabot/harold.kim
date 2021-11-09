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
<script type="module">
  import { useRoute, useData } from "vitepress";

  export default {
    data() {
      return {
        theme: useData().theme,
        route: useRoute(),
      };
    },    
    computed: {
      isRoot() {
        let route = useRoute();
        if (route.path) {
          return route.path === "/" || route.path === "/index.html";
        } else {
          return false;
        }
      },
    },
  };
</script>
