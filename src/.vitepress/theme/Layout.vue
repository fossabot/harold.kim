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

  console.warn = () => {};
  console.log(
    "%cDesigned by stypr (https://harold.kim/)",
    "font-size:30px; padding:30px; border:1px dashed #666; margin: 20px; outline: 1px solid darkblue;"
  );
  console.log(
    "%cWARNING!",
    "font-size:26px; padding: 0 20px; font-weight:700;"
  );
  console.log(
    `%cThe avatar used in this website contains respective copyrights of various actors, including but not limited to the owner of this website.\n
Copying, Modification or redistribution for any purposes whether in part or in the whole of the avatar used in this website is strictly forbidden without the expressed consent of the website administrator.\n
Please contact the administrator of the website for any inquiries regarding the usage of the avatar.\n`,
    "font-size:20px; padding: 0px;margin:0 20px; font-weight:400;"
  );
</script>