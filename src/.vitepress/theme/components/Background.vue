<template>
  <BackgroundNormal v-if="avatarMode === false" />
  <BackgroundAvatar v-else />
  <div class="menu-right">
    <label class="switch">
        <input
          type="checkbox"
          :checked="avatarMode !== false"
          @change="toggleAvatarMode()"
        >
        <span class="slider"></span>
    </label>
  </div>
</template>
<script type="module">
  import BackgroundNormal from './BackgroundNormal.vue'
  import BackgroundAvatar from './BackgroundAvatar.vue'

  export default {
    components: {
      BackgroundNormal,
      BackgroundAvatar,
    },
    data() {
      return {
        avatarMode: false,
      };
    },
    mounted() {
      this.avatarMode = Boolean(Number(localStorage.avatarMode));
    },
    methods: {
      toggleAvatarMode(){
        localStorage.avatarMode = (localStorage.avatarMode === "1") ? "0" : "1";
        this.avatarMode = Boolean(Number(localStorage.avatarMode));
      }
    }
  };
</script>