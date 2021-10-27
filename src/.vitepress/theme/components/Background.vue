<template>
  <BackgroundNormal v-if="avatarMode !== '1'" />
  <BackgroundAvatar v-if="avatarMode === '1'" />
  <div class="menu-right">
    <label class="switch">
        <input type="checkbox" :checked="avatarMode === '1'" @change="toggleAvatarMode()">
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
        avatarMode: 0,
      };
    },
    mounted() {
        this.avatarMode = localStorage.avatarMode;
    },
    methods: {
      toggleAvatarMode(){
        localStorage.avatarMode = (localStorage.avatarMode === '1') ? '0' : '1';
        this.avatarMode = localStorage.avatarMode;
        return true;
      }
    },
    computed: {
      isAvatarMode: function () {
        return localStorage.avatarMode === '1';
      },
    }
  };
</script>