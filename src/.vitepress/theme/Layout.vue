<template>
  <NavBar />
  <Container />
  <Background />
  <div class="menu-bottom">
    <a href="//github.com/stypr/harold.kim">Made with &hearts;</a><br />
    <small>{{ git_hash }}</small>
  </div>
</template>
<script setup lang="ts">
  import NavBar from './NavBar.vue';
  import Background from './components/Background.vue';
  import Container from './components/Container.vue';
  import { useData } from 'vitepress';

  const { theme } = useData();
  const git_hash = theme.value.customData.commit;
  console.log(
    "%cDesigned by stypr (https://harold.kim/)",
    "color:#004080; font-size:30px; padding:30px; border:1px solid #004080; margin: 20px;"
  );
</script>