import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview'
import VueUieditor from 'vue-uieditor'
import { IViewUieditor } from 'iview-uieditor'
// import 'iview/dist/styles/iview.css';
import components from './components';

components.forEach(component => {
  Vue.component(component.name, component);
});

Vue.use(iView)
Vue.use(VueUieditor)
Vue.use(IViewUieditor)
new Vue({
	el: "#app",
	router,
	render: function(h) {
		return h(App)
	}
})