require('./bootstrap');

import Vue from 'vue';
import router from "./router";
import App from "./components/App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import VueScrollSnap from "vue-scroll-snap";
import Indicator from "./components/Indicator";
import VueTypedJs from 'vue-typed-js'
import VueKinesis from 'vue-kinesis';
import { KinesisContainer, KinesisElement} from 'vue-kinesis';

window.Vue = Vue;

Vue.use(VueTypedJs);
Vue.use(VueKinesis);

Vue.component('App', App);
Vue.component('header-view', Header);
Vue.component('footer-view', Footer);
Vue.component('indicator-view', Indicator);
Vue.component('vue-scroll-snap', VueScrollSnap);
Vue.component('kinesis-container', KinesisContainer);
Vue.component('kinesis-element', KinesisElement);

const app = new Vue({
    el: '#app',
    router
});
