const { getPosts } = require('./getBlog');
const { execSync } = require('child_process');
const getLatestCommit = () => execSync('git rev-parse HEAD').toString().trim().substring(0, 16);

module.exports = {
    title: "harold.kim",
    description: "Yet another security enthusiast.",
    head: [
        ['meta', { name: 'viewport', content: 'initial-scale=1, user-scalable=0' }],
        ['meta', { name: 'keywords', content: 'stypr, Harold Kim, harold.kim' }],
        ['meta', { name: 'google', content: 'notranslate' }],
        ['meta', { name: 'referrer', content: 'no-referrer' }],
        ['link', { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }],
        ['link', { rel: 'apple-touch-icon-precomposed', href: '/favicon.ico' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+KR:300' }],
        ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Oxygen+Mono:400' }],
        ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css' }]
    ],
    markdown: {
        anchor: {
            permalink: false,
            permalinkBefore: false,
        }
    },
    themeConfig: {
        repo: 'https://github.com/stypr/harold.kim',
        apiServer: 'https://api.harold.kim/api/v1',
        editLinks: false,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about/' },
            { text: 'Blog', link: '/blog/' },
            { text: 'Donate', link: '/donate/' },
            { text: 'Gaming', link: '/gaming/' },
            { text: 'Project', link: '/project/' },
            { text: 'Contact', link: '/contact/' },
        ],
        customData: {
            commit: getLatestCommit(),
            posts: getPosts(),
        }
    },
};
