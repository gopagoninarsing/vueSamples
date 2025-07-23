const app = Vue.createApp({
    data() {
	return {
	    visible: true,
	    inputBackgroundColor: '',
	    inputClass: ''
	}
    },
    computed: {
	paraClasses: function() {
	    return {
		user1: this.inputClass === 'user1',
		user2: this.inputClass === 'user2',
	    }
	}
    },
    methods: {
	toggleElement: function() {
	    return this.visible = !this.visible;
	}
    }
});
app.mount('#assignment');
