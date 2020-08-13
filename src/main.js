import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import '@fortawesome/fontawesome-free/css/all.css'
// import '@fortawesome/fontawesome-free/js/all.js'
import "./assets/styles/custom.scss";
import VueFloatLabel from "vue-float-label";
import { MdButton, MdContent, MdTabs } from "vue-material/dist/components";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { faSpinner,faPencilAlt,faUserSecret,faEnvelope,faSync } from "@fortawesome/free-solid-svg-icons";

Vue.use(VueMaterial);
Vue.use(VueFloatLabel);
Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
library.add([faSpinner,faPencilAlt,faUserSecret,faFontAwesome,faEnvelope,faSync]);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
