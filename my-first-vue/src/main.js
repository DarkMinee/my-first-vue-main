// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBOyij00qSkUDMjYrWYNK4--MpiRS-bWlw",
  authDomain: "my-first-vue-c8923.firebaseapp.com",
  projectId: "my-first-vue-c8923",
  storageBucket: "my-first-vue-c8923.appspot.com",
  messagingSenderId: "793288807216",
  appId: "1:793288807216:web:77700f6ea256f2ff3d2ef5"
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
