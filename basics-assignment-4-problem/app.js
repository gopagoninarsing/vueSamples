const app = Vue.createApp({
    data() {
	return {
	    visible: true,
	    style: ''
	}
    },
    methods: {
	toggleElement: function() {
	    return this.visible = !this.visible;
	}
    }
});
app.mount('#assignment');
