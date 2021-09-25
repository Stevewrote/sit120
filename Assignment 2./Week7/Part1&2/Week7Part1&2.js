
//Week 7 Part 1 Global Component 

import { createApp } from 'vue'
import PopupWindow from './components/PopupWindow'
import App from "./App.vue"

const Steveapp = createApp(App)

app.component('PopupWindow', PopupWindow)

app.mount('#app')

//Week 7 Part 1 Local Component

new Vue({
	el: '#app',
	components: {
		'adress': about
	}
});

var about = {
	data: function() {
		return {
			mailAddress: '123 Tree Street Leafytown 5083'
		};
	},
	template: `
		<div>
			<h1></h1>
			<p>Please send an e-mail to: {{ email }}</p>
		</div>
	`

    //Week 7 Part 2


};
