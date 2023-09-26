<template>
    <div class="position-absolute top-50 start-50 translate-middle text-center">
        <h2>Benvenuto</h2>
        <p>Esegui il login per continuare</p>
        <button class="btn btn-outline-success" @click="googleSignIn">
            Entra con google
        </button>
    </div>
</template>

<script>
    import { getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
    export default {
        methods: {
            googleSignIn: function() {
                let provider = new GoogleAuthProvider();
                signInWithPopup(getAuth(), provider)
                .then((_) => {
                    this.$router.push('/home' || '/')
                })
                .catch((err) => {
                    console.log(err);
                });
            }
            
        },
    }
</script>