<template>
  <div class="container hidden" :class="{ 'display': !isRoot }">
    <div class="padded" ref="container">
      <a href="/blog/" class="back" v-if="post_view">&laquo; Article List</a>
      <!-- Content is automatically imported from Vitepress -->
      <Content />
      <div id="disqus_thread" :class="{ 'hidden': !post_view }"></div>
    </div>
  </div>
</template>
<script type="module">
import { useRoute } from "vitepress";

export default {
  data() {
    return {
      post_view: false,
    }
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
  methods: {
    jumpContainer() {
      this.$nextTick(() => {
        this.$refs.container.scrollIntoView({ behavior: 'smooth' });
      });
    },
    loadDisqus() {
      // Disqus
      if(typeof DISQUS !== 'undefined'){
        // Reset DISQUS since it is already loaded.
        DISQUS.reset({
          reload: true,
          config: function () {
            this.page.url = location.href;
          }
        });
      }else{
        // Dynamically load DISQUS on BlogPost
        var d = document;
        var s = d.createElement('script');
        s.src = 'https://haroldie.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
      }
    },
    refreshContainer() {
      this.jumpContainer();
      let route = useRoute();
      if(route.path){
        // When you read blog post, load DISQUS
        if(route.path.startsWith("/blog/") &&
           route.path !== '/blog/' &&
           route.path !== '/blog/index.html'){
          this.post_view = true;
          this.loadDisqus();
          // Let images have fallbacks
          this.$el.querySelectorAll("img").forEach(item => {
            item.onerror = () => {
              item.src = "/static/dead_image.png";
              item.width = 100;
            }
          })
        }else{
          this.post_view = false;
        }
      }else{
        this.post_view = false;
      }
    }
  },
  updated(){
    this.refreshContainer();
  },
  mounted(){
    this.refreshContainer();
  }
};
</script>
