import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';
import App from './App.vue';
import './main.html';
import router from './router'
import i18n from './i18n'
import './styles'
import store from './store'

Vue.config.productionTip = false;
Vue.use(VueMeteorTracker);

Meteor.startup(() => {
  new Vue({
    router,
    i18n,
    store,
    render: h => h(App)
  }).$mount('#app');
});
