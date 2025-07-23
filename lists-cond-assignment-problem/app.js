const app = Vue.createApp({
    data() {
        return {
            taskName: '',
            tasks: [],
            visible: true
        }
    },
    computed: {
        buttonCaption: function() {
            return this.visible? 'Hide List': 'Show List';
        }
    },
    methods: {
        addTasks: function() {
            this.tasks.push(this.taskName);
        },
        toggleDisplay: function() {
            this.visible = !this.visible;
        }
    }
});
app.mount('#assignment');