<template>
    <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
        <button @click="googleSignIn">
            Entra con google
        </button>
    </div>
</template>

<script>
    import firebase from "firebase";
    export default {
        name: 'SignUp',
        methods: {
            googleSignIn: function() {
                let provider = new firebase.auth.GoogleAuthProvider();
                firebase
                .auth()
                .signInWithPopup(provider)
                .then((result) => {
                    //let token = result.credential.accessToken;
                    //let user = result.user;
                    this.$router.push('/home' || '/')
                })
                .catch((err) => {
                    console.log(err); // This will give you all the information needed to further debug any errors
                });
            }
            
        },
    }
</script>