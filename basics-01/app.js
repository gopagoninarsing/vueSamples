const app = Vue.createApp({
    data() {
        return {
            goal: 'Learning Vue!',
            readMore: 'https://vuejs.org/guide/introduction.html'
        }
    },
    methods: {
        goalText: function () {
            let x = Math.random();
            if (x > 0.5) {
                return " Basic Learner!";
            }
            else {
                return " Advanced Learner!";
            }
        }
    }

});

app.mount('#user-goal');