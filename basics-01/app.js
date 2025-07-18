const app = Vue.createApp({
    data() {
        return {
            goal: 'Learning Vue!',
            readMore: 'https://vuejs.org/guide/introduction.html'
        }
    },

});

app.mount('#user-goal');