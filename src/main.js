import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBOyij00qSkUDMjYrWYNK4--MpiRS-bWlw",
    authDomain: "my-first-vue-c8923.firebaseapp.com",
    projectId: "my-first-vue-c8923",
    storageBucket: "my-first-vue-c8923.appspot.com",
    messagingSenderId: "793288807216",
    appId: "1:793288807216:web:77700f6ea256f2ff3d2ef5"
};

const firebase = initializeApp(firebaseConfig)
const db = getFirestore(firebase)

const app = createApp(App)

app.use(router)

app.mount('#app')

export {db}
