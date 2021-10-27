import './css/main.css';
import './css/code.css';
import Layout from './Layout.vue';
import BlogList from './components/BlogList.vue';

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // any custom tags used within Markdown goes here
    app.component('BlogList', BlogList);
  }
};