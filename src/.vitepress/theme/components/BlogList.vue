<template>
  <h1><i class="fa-solid fa-square-rss"></i> Posts</h1>
  <ul id="list-post">
    <span v-if="!(posts.length && !posts_error)"> Loading... </span>
    <li v-for="post in sortedPosts" :key="post.dates">
      <b>{{ post.created_at }}</b>
      &nbsp;<span class="badge-category">{{ post.category }}</span><br />
      <a :href="post.filename">{{ post.title }}</a><br /><br />
    </li>
  </ul>
  <h1><i class="fa-solid fa-note-sticky"></i> Gists</h1>
  <ul id="list-gist">
    <span v-if="gists_error">
      Ouch! We couldn't load the gists.<br>
      How about checking <a href="//gist.github.com/stypr">gists</a> instead?
    </span>
    <span v-if="!(gists.length && !gists_error)"> Loading... </span>
    <li v-for="gist in gists" :key="gist.created_at">
      <b>{{ gist.created_at }}</b>
      &nbsp;<span v-for="language in gist.language" :key="language" class="badge-tag">{{ language }}</span><br />
      <a :href="gist.url">{{ gist.description }}</a><br /><br />
    </li>
  </ul>
</template>
<script type="module">
  import { useData } from 'vitepress'

  export default {
    data() {
      return {
        data: useData(),
        posts: [],
        gists: [],
        posts_error: false,
        gists_error: false,
      };
    },
    mounted() {
      this.getPosts();
      // Dynamically load gists
      // Return stored gists on error
      fetch(`${this.data.theme.apiServer}/gists`)
      .then((response) => response.json())
      .then((response) => {
        this.updateGists(response);
      })
      .catch((error) => {
        this.gists_error = true
      });
    },
    methods: {
      getPosts() {
        this.posts = this.data.theme.customData.posts;
      },
      updateGists(response) {
        for (var i in response) {
          // retrieve languages
          let _lang = new Set();
          Object.keys(response[i].files).forEach((key) => {
            let _tmp = response[i].files[key].language;
            if(_tmp){
              _lang.add(response[i].files[key].language);
            }
          });
          this.gists.push({
            created_at: new Date(response[i].created_at)
              .toISOString()
              .substr(0, 10),
            description: response[i].description,
            url: response[i].html_url,
            language: Array.from(_lang),
          });
        }
        this.gists_error = false;
      }
    },
    computed: {
      sortedPosts: function () {
        if(this.posts){
          this.posts.sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at);
          });
          return this.posts;
        }
      },
    }
  };
</script>
