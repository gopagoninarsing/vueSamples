const app = Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: 'Hello World!'
        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
});
app.mount('#app');